import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';
import { History } from '../../models/history';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {

  history: Array<History> = [];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.historyService.getAll()
      .subscribe(history => {
          this.history = history;
      }, error => console.log(error));
  }
}
