import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeader } from '../../components/side-menu-header/side-menu-header';
import { SideMenuOptions } from '../../components/side-menu-options/side-menu-options';
import { GifsSideMenu } from "../../components/gifs-side-menu/gifs-side-menu";


@Component({
  selector: 'app-dashboard-page',
  imports: [RouterOutlet, GifsSideMenu],
  templateUrl: './dashboard-page.html',
})
export default class DashboardPage {}
