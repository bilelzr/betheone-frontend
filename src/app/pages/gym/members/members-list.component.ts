import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { Member } from 'src/app/services/models/member';
import { MemberService } from 'src/app/services/api/member.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    CommonModule,
    RouterModule,
  ],
})
export class MembersListComponent implements AfterViewInit, OnInit {
  @ViewChild(MatTable, { static: true }) table: MatTable<any> =
    Object.create(null);

  searchText: any;

  displayedColumns: string[] = [
    '#',
    'name',
    'email',
    'phone',
    'join date',
    'subscriptions',
    'action',
  ];

  dataSource = new MatTableDataSource<Member>([]);
  members: Member[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator =
    Object.create(null);

  constructor(
    public dialog: MatDialog,
    private memberService: MemberService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.loadAllMembers();
  }

  loadAllMembers(): void {
    this.memberService.findAll().subscribe(
      (response: Member[]) => {
        this.members = response;
        this.dataSource.data = this.members;
        this.dataSource = new MatTableDataSource(this.members);
      },
      (error) => {
        console.error('Error fetching members:', error);
      }
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteMember(id: number): void {
    if (confirm('Are you sure you want to delete this member?')) {
      this.memberService.deleteMember(id).subscribe(
        () => {
          this.loadAllMembers();
          this.snackBar.open('Member deleted successfully!', 'Close', {
            duration: 3000,
          });
        },
        (error) => {
          console.error('Error deleting member:', error);
          this.snackBar.open('Failed to delete member!', 'Close', {
            duration: 3000,
          });
        }
      );
    }
  }
}
