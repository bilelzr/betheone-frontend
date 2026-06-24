export interface Member {
  memberPkId?: number;
  user?: User;
  uuid?: string;
  dateOfBirth?: string;
  address?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  joinDate?: string;
  notes?: string;
  subscriptions?: MemberSubscription[];
  enrollments?: ClassEnrollment[];
  payments?: Payment[];
}

export interface User {
  uuid?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: string;
}

export interface MemberSubscription {
  id?: number;
  status?: string;
  startDate?: string;
  endDate?: string;
}

export interface ClassEnrollment {
  id?: number;
  enrollmentDate?: string;
}

export interface Payment {
  id?: number;
  amount?: number;
  paymentDate?: string;
  status?: string;
}

export interface MemberDto {
  userUuid?: string;
  dateOfBirth?: string;
  address?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  joinDate?: string;
  notes?: string;
}

export interface CreateMemberDto {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  imagePath?: string;
  dateOfBirth: string;
  address?: string;
  emergencyContact?: string;
  emergencyPhone?: string;
  notes?: string;
}
