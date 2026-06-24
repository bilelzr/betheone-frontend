import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Membership, MembershipDto, MembershipType } from '../models/membership';

@Injectable({
  providedIn: 'root',
})
export class MembershipService {
  private backendUrl = 'http://localhost:8081/api/v1/membership';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Membership[]> {
    return this.http.get<Membership[]>(`${this.backendUrl}/all`);
  }

  findActive(): Observable<Membership[]> {
    return this.http.get<Membership[]>(`${this.backendUrl}/active`);
  }

  findById(id: number): Observable<Membership> {
    return this.http.get<Membership>(`${this.backendUrl}/${id}`);
  }

  findByType(type: MembershipType): Observable<Membership[]> {
    return this.http.get<Membership[]>(`${this.backendUrl}/type/${type}`);
  }

  createMembership(membershipDto: MembershipDto): Observable<Membership> {
    return this.http.post<Membership>(`${this.backendUrl}`, membershipDto);
  }

  updateMembership(id: number, membershipDto: MembershipDto): Observable<Membership> {
    return this.http.put<Membership>(`${this.backendUrl}/${id}`, membershipDto);
  }

  deleteMembership(id: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/${id}`);
  }

  deactivateMembership(id: number): Observable<Membership> {
    return this.http.put<Membership>(`${this.backendUrl}/${id}/deactivate`, {});
  }
}
