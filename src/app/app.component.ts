import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
    themeName: string = 'Executive';
  onChangeTheme() {
    const selectedExecutive: any  = document.querySelector(
      "input#option-1"
    ).checked;
    const selectedGrowth: any  = document.querySelector(
      "input#option-2"
    ).checked;

    console.log(selectedExecutive, selectedGrowth);
    const selectedThemeFile =
    selectedExecutive ? "executive.css" : "growth.css";

    const lazyStyleElement: any = document.querySelector(
      `link[rel=stylesheet][href='${selectedThemeFile}']`
    );

    if (typeof lazyStyleElement !== undefined && lazyStyleElement !== null) {
      lazyStyleElement.rel = "stylesheet";
      lazyStyleElement.href =
        selectedExecutive ? "growth.css" : "executive.css";
      this.themeName = selectedExecutive ? 'Growth' : 'Executive';
    }
  }
}
