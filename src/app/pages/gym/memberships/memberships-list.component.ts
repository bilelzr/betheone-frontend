import { Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MembershipService } from 'src/app/services/api/membership.service';
import { Membership } from 'src/app/services/models/membership';

@Component({
  selector: 'app-memberships-list',
  templateUrl: './memberships-list.component.html',
  imports: [
    MaterialModule,
    TablerIconsModule,
    CommonModule,
    RouterModule,
  ],
})
export class MembershipsListComponent implements OnInit {
  displayedColumns: string[] = ['#', 'name', 'type', 'price', 'duration', 'features', 'status', 'action'];
  dataSource = new MatTableDataSource<Membership>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private membershipService: MembershipService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.loadMemberships();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  loadMemberships(): void {
    this.membershipService.findAll().subscribe(
      (response: Membership[]) => {
        this.dataSource.data = response;
      },
      (error) => {
        console.error('Error fetching memberships:', error);
        this.snackBar.open('Failed to load memberships!', 'Close', {
          duration: 3000,
        });
      }
    );
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteMembership(id: number): void {
    if (confirm('Are you sure you want to delete this membership?')) {
      this.membershipService.deleteMembership(id).subscribe(
        () => {
          this.snackBar.open('Membership deleted successfully!', 'Close', {
            duration: 3000,
          });
          this.loadMemberships();
        },
        (error) => {
          console.error('Error deleting membership:', error);
          this.snackBar.open('Failed to delete membership!', 'Close', {
            duration: 3000,
          });
        }
      );
    }
  }

  toggleStatus(membership: Membership): void {
    if (membership.active) {
      this.membershipService.deactivateMembership(membership.membershipPkId!).subscribe(
        () => {
          this.snackBar.open('Membership deactivated!', 'Close', {
            duration: 3000,
          });
          this.loadMemberships();
        },
        (error) => {
          console.error('Error deactivating membership:', error);
          this.snackBar.open('Failed to deactivate membership!', 'Close', {
            duration: 3000,
          });
        }
      );
    }
  }

  formatPrice(price: number | undefined): string {
    return price ? `$${price.toFixed(2)}` : '$0.00';
  }
}
