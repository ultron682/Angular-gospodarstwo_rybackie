import { Component, OnInit } from '@angular/core';
import { Fish } from 'src/app/core/models/Fish';

@Component({
  selector: 'app-for-sale-favorite',
  templateUrl: './for-sale-favorite.component.html',
  styleUrls: ['./for-sale-favorite.component.scss']
})
export class ForSaleFavoriteComponent implements OnInit {

  fish: Fish[] = [
    {
      name: 'Karp',
      description: 'Karp – gatunek słodkowodnej ryby z rodziny karpiowatych.',
      image: 'https://fishphotosgosrybackie.s3.eu-west-2.amazonaws.com/photos/page1_pic1.jpg',
      price: 12.5
    },
    {
      name: 'Jesiotr',
      description: 'Jesiotr jest rybą, która osiąga imponujące rozmiary. Może mieć więcej niż 200 cm długości i osiągać do 100 kg wagi.',
      image: 'https://fishphotosgosrybackie.s3.eu-west-2.amazonaws.com/photos/page1_pic2.jpg',
      price: 5
    },
    {
      name: 'Pstrąg',
      description: 'Pstrąg – zwyczajowa nazwa kilku gatunków drapieżnych ryb z rodziny łososiowatych.',
      image: 'https://fishphotosgosrybackie.s3.eu-west-2.amazonaws.com/photos/page1_pic3.jpg',
      price: 20
    },
    {
      name: 'Węgorz',
      description: 'Węgorz europejski – gatunek ryby węgorzokształtnej z rodziny węgorzowatych.',
      image: 'https://fishphotosgosrybackie.s3.eu-west-2.amazonaws.com/photos/page1_pic4.jpg',
      price: 15
    },
    {
      name: 'Sum',
      description: 'Sum pospolity, sum, sum europejski – gatunek ryby z rodziny sumowatych.',
      image: 'https://fishphotosgosrybackie.s3.eu-west-2.amazonaws.com/photos/page1_pic5.jpg',
      price: 12.5
    },
    {
      name: 'Szczupak',
      description: 'Szczupak pospolity, szczupak – gatunek szeroko rozprzestrzenionej, drapieżnej ryby z rodziny szczupakowatych.',
      image: 'https://fishphotosgosrybackie.s3.eu-west-2.amazonaws.com/photos/page1_pic6.jpg',
      price: 5
    },
    {
      name: 'Amur',
      description: 'Amur biały – gatunek ryby z rodziny karpiowatych, jedyny przedstawiciel rodzaju Ctenopharyngodon.',
      image: 'https://fishphotosgosrybackie.s3.eu-west-2.amazonaws.com/photos/page1_pic7.jpg',
      price: 20
    },
    {
      name: 'Tołpyga',
      description: 'Tołpyga biała, tołpyga – gatunek słodkowodnej ryby z rodziny karpiowatych',
      image: 'https://fishphotosgosrybackie.s3.eu-west-2.amazonaws.com/photos/page1_pic8.jpg',
      price: 15
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
