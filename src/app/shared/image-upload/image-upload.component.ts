import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-image-upload',
  imports: [CommonModule],
  templateUrl: './image-upload.component.html',
  styleUrl: './image-upload.component.css',
})
export class ImageUploadComponent {
  previewUrl: string | ArrayBuffer | null = null;
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;
  @Output() imageSelected = new EventEmitter<File>();

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.imageSelected.emit(file);

      // For preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  clear(): void {
    this.previewUrl = null;
    this.imageSelected.emit();
    this.fileInputRef.nativeElement.value = ''; // clear file input
  }
}
