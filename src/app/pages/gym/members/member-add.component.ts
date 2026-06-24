import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MemberService } from 'src/app/services/api/member.service';
import { MembershipService } from 'src/app/services/api/membership.service';
import { CreateMemberDto } from 'src/app/services/models/member';
import { Membership } from 'src/app/services/models/membership';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    TablerIconsModule,
    CommonModule,
    RouterModule,
  ],
})
export class MemberAddComponent implements OnInit {
  memberForm: FormGroup;
  memberships: Membership[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService,
    private membershipService: MembershipService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.memberForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      dateOfBirth: ['', Validators.required],
      address: [''],
      emergencyContact: [''],
      emergencyPhone: [''],
      notes: [''],
      membershipId: [null],
    });
  }

  ngOnInit(): void {
    this.loadMemberships();
  }

  loadMemberships(): void {
    this.membershipService.findActive().subscribe(
      (response: Membership[]) => {
        this.memberships = response;
      },
      (error) => {
        console.error('Error fetching memberships:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.memberForm.invalid) {
      this.memberForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    const formValue = this.memberForm.value;
    const membershipId = formValue.membershipId;

    const createMemberDto: CreateMemberDto = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      phone: formValue.phone,
      dateOfBirth: formValue.dateOfBirth,
      address: formValue.address,
      emergencyContact: formValue.emergencyContact,
      emergencyPhone: formValue.emergencyPhone,
      notes: formValue.notes,
    };

    this.memberService.createMemberWithMembership(createMemberDto, membershipId).subscribe(
      (response) => {
        this.loading = false;
        this.snackBar.open('Member added successfully!', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/gym/members']);
      },
      (error) => {
        this.loading = false;
        console.error('Error adding member:', error);
        this.snackBar.open('Failed to add member!', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/gym/members']);
  }

  formatPrice(price: number | undefined): string {
    return price ? `$${price.toFixed(2)}` : '$0.00';
  }
}
