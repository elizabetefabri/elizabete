import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisorComponent } from './components/divisor/divisor.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SectionsBannerComponent } from './components/main/sections-banner/sections-banner.component';
import { SectionsContatoComponent } from './components/main/sections-contato/sections-contato.component';
import { SectionsHabilidadesComponent } from './components/main/sections-habilidades/sections-habilidades.component';
import { SectionsSobreComponent } from './components/main/sections-sobre/sections-sobre.component';
import { SocialMediaComponent } from './components/main/sections-sobre/social-media/social-media.component';
import { SocialMediaDarkComponent } from './components/main/sections-sobre/social-media-dark/social-media-dark.component';
import { SkillsComponent } from './components/skills/skills.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CertificadosComponent } from './pages/sobre/certificados/certificados.component';
import { CardProjectsComponent } from './components/card/card-projects/card-projects.component';
import { BtnGithubComponent } from './components/btn/btn-github/btn-github.component';


@NgModule({
  declarations: [
    AppComponent,
    DivisorComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SectionsBannerComponent,
    SectionsContatoComponent,
    SectionsHabilidadesComponent,
    SectionsSobreComponent,
    SocialMediaComponent,
    SocialMediaDarkComponent,
    SkillsComponent,
    HomeComponent,
    PortfolioComponent,
    ContatoComponent,
    SobreComponent,
    CertificadosComponent,
    CardProjectsComponent,
    BtnGithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
