export interface UserProfile {
  id: string;
  name: string;
  email: string;
  city: string;
  street: string;
  phone: string;
  imageId: string;
}

export interface UpdateProfile {
  id: string;
  email: string;
  city: string;
  street: string;
  phone: string;
  imageId: string;
}
