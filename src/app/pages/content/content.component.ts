import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    photoCover:string ="../../../assets/content-01.jpg"
    contentTitle:string ="Chicago Bulls tem temporada melancólica e pode partir para trocas."
    contentText:string ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia ultrices magna, scelerisque congue eros luctus a. Nullam at urna lacinia, lobortis lacus ut, sollicitudin nunc. Nulla vitae tortor sed ipsum congue tincidunt. Suspendisse rhoncus ipsum eleifend, auctor ipsum in, dignissim erat. Aliquam rutrum augue dignissim nunc mollis, sed pharetra orci tincidunt. Cras sit amet ipsum justo. Maecenas blandit vehicula nisl dignissim gravida. Vestibulum vel lobortis tellus, eu eleifend justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies sapien sapien, vitae posuere massa pellentesque vel. Donec vel ex eu quam luctus rhoncus. Morbi sed tempus orci. Suspendisse dolor lacus, gravida nec massa nec, sollicitudin consequat erat.Proin condimentum tellus varius quam maximus fermentum. Integer est nibh, fermentum eu vulputate ac, gravida a neque. Pellentesque congue, nisl nec imperdiet ornare, tellus sem molestie ante, ultricies cursus lorem leo in justo. In lobortis vitae elit a ultricies. Nunc vel pharetra velit. Morbi condimentum ex at ex luctus, eu rutrum lorem rhoncus. Vestibulum blandit, nibh a hendrerit sagittis, mauris metus mattis diam, ac fringilla magna nulla eu augue. Nunc et tempus leo. Curabitur volutpat vitae sem id consectetur. Pellentesque vehicula ligula nulla, suscipit lacinia turpis semper quis. Ut lorem tortor, bibendum eu tellus vitae, blandit tincidunt purus. Suspendisse accumsan semper euismod. Nunc tortor odio, lacinia eu mauris sit amet, convallis congue lorem. Nunc pulvinar ultricies luctus. Cras efficitur, sem at lobortis bibendum, tellus dolor aliquet sapien, in suscipit libero libero nec neque. Integer ullamcorper mi justo, non finibus odio feugiat sed."

  constructor() { }

  ngOnInit(): void {
  }

}
