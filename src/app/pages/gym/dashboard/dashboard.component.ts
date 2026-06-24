import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MemberService } from '../../../services/api/member.service';

interface DashboardStats {
  totalMembers: number;
  activeSubscriptions: number;
  todayClasses: number;
  monthlyRevenue: number;
  expiringSubscriptions: number;
}

@Component({
  selector: 'app-gym-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, TablerIconsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class GymDashboardComponent implements OnInit {
  stats: DashboardStats = {
    totalMembers: 0,
    activeSubscriptions: 0,
    todayClasses: 0,
    monthlyRevenue: 0,
    expiringSubscriptions: 0
  };

  loading = true;

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.memberService.findAll().subscribe({
      next: (members) => {
        this.stats.totalMembers = members.length;
        this.stats.activeSubscriptions = members.filter(m => m.subscriptions && m.subscriptions.length > 0).length;
        this.stats.todayClasses = 0; // TODO: Implement when schedule service is ready
        this.stats.expiringSubscriptions = 0; // TODO: Implement when subscription service is ready
        this.stats.monthlyRevenue = 0; // TODO: Implement when payment service is ready
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading dashboard data:', error);
        this.loading = false;
      }
    });
  }
}
