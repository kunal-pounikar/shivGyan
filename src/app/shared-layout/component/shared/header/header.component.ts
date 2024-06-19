import { Component, inject, Renderer2, TemplateRef,HostListener } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private routes: Router, private renderer: Renderer2) {}
 // offcanvas start
 private offcanvasService = inject(NgbOffcanvas);
 closeResult = '';

 open(content: TemplateRef<any>) {
   this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
     (result) => {
       this.closeResult = `Closed with: ${result}`;
     },
     (reason) => {
       this.closeResult =`Dismissed ${this.getDismissReason(reason)}`;
     },
   );
 }

 private getDismissReason(reason: any): string {
   switch (reason) {
     case OffcanvasDismissReasons.ESC:
       return 'by pressing ESC';
     case OffcanvasDismissReasons.BACKDROP_CLICK:
       return 'by clicking on the backdrop';
     default:
       return `with: ${reason}`;
   }
 }
 navigateTo(path:any) {
	this.routes.navigate([path]);
  }
 // end

 @HostListener('window:scroll', [])
 onWindowScroll() {
   const navbar = document.getElementById('navbar');
   if (window.scrollY > 50) {
     this.renderer.addClass(navbar, 'scrolled');
   } else {
     this.renderer.removeClass(navbar, 'scrolled');
   }
}
}
