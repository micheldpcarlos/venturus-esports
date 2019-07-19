import { Component, OnInit } from '@angular/core';
import { faLifeRing, faSmile, IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.scss']
})
export class QAndAComponent implements OnInit {


  private questionsAndAnswers: QuestionAndAnswer[] = [
    {icon: faLifeRing, question: 'Need help?', answer: ''},
    {icon: faHeartbeat, question: 'Why register?', answer: ''},
    {icon: faSmile, question: 'What people are saying...', answer: ''}
  ]

  constructor() { }

  ngOnInit() {
  }

}


export interface QuestionAndAnswer {
  icon: IconDefinition,
  question: string,
  answer: string
}