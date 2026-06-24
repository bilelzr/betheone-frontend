import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MembershipService } from 'src/app/services/api/membership.service';
import { Membership, MembershipDto, MEMBERSHIP_TYPES } from 'src/app/services/models/membership';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membership-edit',
  templateUrl: './membership-edit.component.html',
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    TablerIconsModule,
    CommonModule,
    RouterModule,
  ],
})
export class MembershipEditComponent implements OnInit {
  membershipForm: FormGroup;
  loading = false;
  membershipId: number;
  membershipTypes = MEMBERSHIP_TYPES;

  constructor(
    private fb: FormBuilder,
    private membershipService: MembershipService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.membershipId = Number(this.route.snapshot.paramMap.get('id'));
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
    this.loadMembership();
  }

  loadMembership(): void {
    this.membershipService.findById(this.membershipId).subscribe(
      (response: Membership) => {
        this.membershipForm.patchValue({
          name: response.name,
          description: response.description,
          type: response.type,
          price: response.price,
          durationDays: response.durationDays,
          active: response.active,
          includesClasses: response.includesClasses,
          includesPersonalTraining: response.includesPersonalTraining,
          maxClassesPerMonth: response.maxClassesPerMonth,
        });
      },
      (error) => {
        console.error('Error fetching membership:', error);
        this.snackBar.open('Failed to load membership!', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  onSubmit(): void {
    if (this.membershipForm.invalid) {
      this.membershipForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const membershipDto: MembershipDto = this.membershipForm.value;

    this.membershipService.updateMembership(this.membershipId, membershipDto).subscribe(
      (response) => {
        this.loading = false;
        this.snackBar.open('Membership updated successfully!', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/gym/memberships']);
      },
      (error) => {
        this.loading = false;
        console.error('Error updating membership:', error);
        this.snackBar.open('Failed to update membership!', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/gym/memberships']);
  }
}
