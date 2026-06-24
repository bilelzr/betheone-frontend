import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MemberService } from 'src/app/services/api/member.service';
import { MembershipService } from 'src/app/services/api/membership.service';
import { Member, MemberDto, MemberSubscription } from 'src/app/services/models/member';
import { Membership } from 'src/app/services/models/membership';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    TablerIconsModule,
    CommonModule,
    RouterModule,
  ],
})
export class MemberEditComponent implements OnInit {
  memberForm: FormGroup;
  memberships: Membership[] = [];
  member: Member | null = null;
  loading = false;
  memberId: number;

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService,
    private membershipService: MembershipService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.memberId = Number(this.route.snapshot.paramMap.get('id'));
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
    });
  }

  ngOnInit(): void {
    this.loadMemberships();
    this.loadMember();
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

  loadMember(): void {
    this.memberService.findById(this.memberId).subscribe(
      (response: Member) => {
        this.member = response;
        this.memberForm.patchValue({
          firstName: response.user?.firstName,
          lastName: response.user?.lastName,
          email: response.user?.email,
          phone: response.user?.phone,
          dateOfBirth: response.dateOfBirth,
          address: response.address,
          emergencyContact: response.emergencyContact,
          emergencyPhone: response.emergencyPhone,
          notes: response.notes,
        });
      },
      (error) => {
        console.error('Error fetching member:', error);
        this.snackBar.open('Failed to load member!', 'Close', {
          duration: 3000,
        });
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
    const memberDto: MemberDto = {
      userUuid: this.member?.user?.uuid,
      dateOfBirth: formValue.dateOfBirth,
      address: formValue.address,
      emergencyContact: formValue.emergencyContact,
      emergencyPhone: formValue.emergencyPhone,
      joinDate: this.member?.joinDate,
      notes: formValue.notes,
    };

    this.memberService.updateMember(this.memberId, memberDto).subscribe(
      (response) => {
        this.loading = false;
        this.snackBar.open('Member updated successfully!', 'Close', {
          duration: 3000,
        });
        this.router.navigate(['/gym/members']);
      },
      (error) => {
        this.loading = false;
        console.error('Error updating member:', error);
        this.snackBar.open('Failed to update member!', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  onCancel(): void {
    this.router.navigate(['/gym/members']);
  }

  getActiveSubscription(): MemberSubscription | null {
    if (!this.member?.subscriptions) return null;
    return this.member.subscriptions.find(s => s.status === 'ACTIVE') || null;
  }

  hasSubscriptions(): boolean {
    return !!(this.member?.subscriptions && this.member.subscriptions.length > 0);
  }

  getSubscriptions(): MemberSubscription[] {
    return this.member?.subscriptions || [];
  }

  isSubscriptionExpired(subscription: MemberSubscription): boolean {
    if (!subscription.endDate) return false;
    return new Date(subscription.endDate) < new Date();
  }

  formatPrice(price: number | undefined): string {
    return price ? `$${price.toFixed(2)}` : '$0.00';
  }
}
