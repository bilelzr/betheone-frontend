import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MembershipService } from 'src/app/services/api/membership.service';
import { MembershipDto, MEMBERSHIP_TYPES } from 'src/app/services/models/membership';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-membership-add',
  templateUrl: './membership-add.component.html',
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    TablerIconsModule,
    CommonModule,
    RouterModule,
  ],
})
export class MembershipAddComponent implements OnInit {
  membershipForm: FormGroup;
  loading = false;
  membershipTypes = MEMBERSHIP_TYPES;

  constructor(
    private fb: FormBuilder,
    private membershipService: MembershipService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.membershipForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      type: ['MONTHLY', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      durationDays: [30, [Validators.required, Validators.min(1)]],
      active: [true],
      includesClasses: [false],
      includesPersonalTraining: [false],
      maxClassesPerMonth: [null],
    });
  }

  ngOnInit(): void {
    this.membershipForm.get('type')?.valueChanges.subscribe((type) => {
      const selectedType = this.membershipTypes.find(t => t.value === type);
      if (selectedType) {
        this.membershipForm.patchValue({ durationDays: selectedType.days });
      }
    });
  }

  onSubmit(): void {
    if (this.membershipForm.invalid) {
      this.membershipForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const membershipDto: MembershipDto = this.membershipForm.value;

    this.membershipService.createMembership(membershipDto).subscribe(
      (response) => {
        this.loading = false;
        this.snackBar.open('Membership created successfully!', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/gym/memberships']);
      },
      (error) => {
        this.loading = false;
        console.error('Error creating membership:', error);
        this.snackBar.open('Failed to create membership!', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/gym/memberships']);
  }
}
