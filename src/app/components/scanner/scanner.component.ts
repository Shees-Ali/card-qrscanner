import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  BarcodeScanner,
  SupportedFormat,
} from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent implements OnInit {
  @Output('emitData') emitData: EventEmitter<any> = new EventEmitter<any>();
  isScanning: boolean = false;
  paramID: string = '';
  constructor() {
    BarcodeScanner.prepare();
  }

  ngOnInit() {}

  didUserGrantPermission() {
    return new Promise(async (resolve) => {
      const status = await BarcodeScanner.checkPermission({ force: false });
      if (status.granted) {
        resolve(true);
      }
      if (status.denied) {
        resolve(false);
      }

      if (status.neverAsked) {
        const c = confirm(
          'We need your permission to use your camera to be able to scan barcodes'
        );
        if (!c) {
          resolve(false);
        }
      }
      const statusRequest = await BarcodeScanner.checkPermission({
        force: true,
      });
      if (statusRequest.granted) {
        resolve(true);
      }
      resolve(false);
    });
  }

  async startScan() {
    await this.didUserGrantPermission();
    const status = await BarcodeScanner.checkPermission();
    if (status.denied) {
      const c = confirm(
        'If you want to grant permission for using your camera, enable it in the app settings.'
      );
      if (c) {
        BarcodeScanner.openAppSettings();
      }
    }
    this.isScanning = true;
    document.querySelector('body')?.classList.add('scanner-active');
    await BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan({
      targetedFormats: [SupportedFormat.QR_CODE],
    });
    this.isScanning = false;
    console.log(result);
    //"http://nedapps.neduet.edu.pk:8080/qrapp/qrapp.jsp?param=1214500618L89118S"
    if (result.hasContent) {
      const string = result.content;
      const index = string.indexOf('param=');
      const paramId = string.slice(index + 6, string.length);
      this.paramID = paramId;
      localStorage.setItem("paramId", this.paramID);
      this.emitData.emit(result.content);
    }
  }
}
