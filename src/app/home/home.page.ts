import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonModal,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonInput,
    IonModal,
    IonTitle,
    IonToolbar,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  title: string = 'Student List';

  students = [
    {
      id: 1,
      name: 'Juan Dela Cruz',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3,
    },
    {
      id: 2,
      name: 'Maria Santos',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3,
    },
    {
      id: 3,
      name: 'Carlos Reyes',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3,
    },
    {
      id: 4,
      name: 'Angela Garcia',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3,
    },
    {
      id: 5,
      name: 'Mark Villanueva',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3,
    },
    {
      id: 6,
      name: 'Sofia Mendoza',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3,
    },
    {
      id: 7,
      name: 'Daniel Bautista',
      gender: 'Male',
      course: 'BS Information Technology',
      year: 3,
    },
    {
      id: 8,
      name: 'Beatrice Navarro',
      gender: 'Female',
      course: 'BS Information Technology',
      year: 3,
    },
  ];

  isModalOpen: boolean = false;
  modalMode: string = '';
  selectedStudent: any = null;
  editData: any = {};
  isEdited: boolean = false;

  openEditModal(student: any) {
    this.selectedStudent = student;
    this.editData = { ...student };
    this.isEdited = false;
    this.modalMode = 'edit';
    this.isModalOpen = true;
  }

  onInputChange() {
    this.isEdited = true;
  }

  openViewModal(student: any) {
    this.selectedStudent = student;
    this.modalMode = 'view';
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  saveStudent() {
    this.selectedStudent.name = this.editData.name;
    this.selectedStudent.gender = this.editData.gender;
    this.selectedStudent.course = this.editData.course;
    this.selectedStudent.year = this.editData.year;
    this.isModalOpen = false;
    alert('Successful Changed');
  }
}
