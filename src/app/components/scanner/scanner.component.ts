import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {
  @Output('emitData') emitData: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() { }

  startScan() {
    setTimeout(() => {
      this.emitData.emit("Mvacac213hsadhsdsd")
    }, 5000);
  }
}
