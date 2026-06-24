import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member, MemberDto, CreateMemberDto } from '../models/member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private backendUrl = 'http://localhost:8081/api/v1/member';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.backendUrl}/all`);
  }

  findById(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.backendUrl}/${id}`);
  }

  findByUuid(uuid: string): Observable<Member> {
    return this.http.get<Member>(`${this.backendUrl}/uuid/${uuid}`);
  }

  createMember(memberDto: MemberDto): Observable<Member> {
    return this.http.post<Member>(`${this.backendUrl}/add`, memberDto);
  }

  createMemberWithMembership(createMemberDto: CreateMemberDto, membershipId?: number): Observable<Member> {
    let params = new HttpParams();
    if (membershipId) {
      params = params.set('membershipId', membershipId.toString());
    }
    return this.http.post<Member>(`${this.backendUrl}/create`, createMemberDto, { params });
  }

  updateMember(id: number, memberDto: MemberDto): Observable<Member> {
    return this.http.put<Member>(`${this.backendUrl}/${id}`, memberDto);
  }

  deleteMember(id: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/${id}`);
  }

  searchMembers(search: string): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.backendUrl}/search?query=${search}`);
  }
}
