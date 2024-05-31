import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';
import { Profile } from '../model/profile.interface';
import { ScrollDetail, ToastController } from '@ionic/angular';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.page.html',
  styleUrls: ['./basic.page.scss'],
})
export class BasicPage implements OnInit {

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

  birthMask: MaskitoOptions = {
    mask: [
      ...Array(2).fill(/\d/),
      '/',
      ...Array(2).fill(/\d/),
      '/',
      ...Array(4).fill(/\d/)
    ]
  };

  fiscalIdMask: MaskitoOptions = {
    mask: [
      ...Array(8).fill(/\d/),
      ...Array(1).fill(/^[a-zA-Z]/)
    ]
  };

  maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();

  profile!: Profile;


  reloadPending: boolean = false;
  loading: boolean = false;
  updateLoading: boolean = false;

  profileForm!: FormGroup;

  constructor(private profileService: ProfileService, private fb: FormBuilder, private toastController: ToastController, private router: Router) { }

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

  logout(): void {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/auth']);
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
