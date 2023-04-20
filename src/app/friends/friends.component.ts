import { Component } from '@angular/core';
import { AmisService } from '../amis.service';
import { AmiComponent } from '../ami/ami.component';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.less'],
})
export class FriendsComponent {
  constructor(private amisService: AmisService) { }

  amis: AmiComponent[] = [];
  searchText = '';

  ngOnInit(): void {
    this.amis = this.amisService.getAmis("grant");

  }
}
