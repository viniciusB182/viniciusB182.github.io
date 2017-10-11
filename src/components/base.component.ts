import { Login } from './../pages/login/login';
import { AuthService } from './../providers/auth.service';
import { NavController, AlertController, MenuController, App } from 'ionic-angular';
import { OnInit } from "@angular/core";
export abstract class BaseComponent implements OnInit {
    protected navCtrl: NavController;

    constructor(public alertCtrl: AlertController,
        public authService: AuthService,
        public app: App,
        public menuCtrl: MenuController
    ) { }

    ngOnInit(): void {
        this.navCtrl = this.app.getActiveNav();
    }

    onLogout(): void {
        this.alertCtrl.create({
            message: "Deseja sair?",
            buttons: [
                {
                    text: 'Sim',
                    handler: () => { 
                        this.authService.logout()
                            .then(() => {
                                this.navCtrl.setRoot(Login);
                            });
                    }
                },
                {
                    text: 'Não'
                }
            ]
        }).present();
    }
}