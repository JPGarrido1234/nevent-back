import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Profile } from './model/profile.interface';
import { ProfileService } from './services/profile.service';
import { IonModal, ScrollDetail, ToastController } from '@ionic/angular';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  litle_text: boolean = false;
  onlyLettersMask: MaskitoOptions = {
    mask: [
      ...Array(80).fill(/^[a-zA-Z\s]/)
    ]
  };

  phoneMask: MaskitoOptions = {
    mask: [
      ...Array(9).fill(/\d/)
    ]
  };

  fiscalIdMask: MaskitoOptions = {
    mask: [
      ...Array(8).fill(/\d/),
      ...Array(1).fill(/^[a-zA-Z]/)
    ]
  };

  maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();

  @ViewChild(IonModal)
  modal!: IonModal;
  isModalOpenPerfil: boolean = false;
  isModalOpenPublico: boolean = false;
  isModalOpenPagos: boolean = false;

  profile!: Profile;


  reloadPending: boolean = false;
  loading: boolean = false;
  updateLoading: boolean = false;

  profileForm!: FormGroup;

  cardForm = new FormGroup({
    cardNumber: new FormControl('', [Validators.required]),
    cardExpiration: new FormControl('', [Validators.required]),
    cardVerificationCode: new FormControl('', [Validators.required]),
  });

  constructor(private profileService: ProfileService, private fb: FormBuilder, private toastController: ToastController, private location: Location) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      name: ['', [Validators.required]],
      surname1: ['', [Validators.required]],
      surname2: ['', []],
      fiscalId: ['', [Validators.pattern(/^\d{8}[A-Za-z]$/)]],
      phone: [
        '',
        [
          Validators.pattern(/^\d{9}$/)
        ],
      ],
      birthDate: ['', []],
      headline: ['', [Validators.maxLength(100)]],
      description: ['', [Validators.maxLength(500)]],
      linkedin: [''],
      twitter: [''],
      instagram: [''],
      phonePublic: [false],
      emailPublic: [false],
    });
    this.refreshProfile(undefined);
  }

  handleRefresh($event: any): void {
    this.refreshProfile($event);
  }

  refreshProfile($event: any | undefined): void {
    this.reloadPending = true;
    this.profileService.getProfile().subscribe((profile: Profile) => {
      this.profile = profile;
      this.profileForm.patchValue(profile);
      if ($event) {
        $event.target.complete();
      }
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  updateProfile() {
    this.updateLoading = true;
    this.profileService.updateProfile(this.profileForm).subscribe(response => {
      this.updateLoading = false;
      this.profileForm.markAsPristine();
      this.presentToast('bottom', 'Perfil actualizado');
    }, () => {
      this.updateLoading = false;
      this.presentToast('bottom', 'No se ha podido actualizar el perfil');
    });
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    ev.detail.scrollTop > 42 ? this.litle_text = true : this.litle_text = false;
  }

}
