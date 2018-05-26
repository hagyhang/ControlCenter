import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './blocks/menu/menu.component';
import { SystemHealthComponent } from './monitoring/system-health/system-health.component';
import { ErrorComponent } from './blocks/error/error.component';
import { SystemHealthService } from './monitoring/system-health/system.service';
import { KafkaConnectComponent } from './management/kafka-connect/kafka-connect.component';
import { SourceAddComponent } from './management/source-add/source-add.component';
import { SinkAddComponent } from './management/sink-add/sink-add.component';

const appRoutes: Routes = [
  {
    path: 'system-health',
    component: SystemHealthComponent,
    data: { title: 'System Health' }
  },
  {
    path: 'kafka-connect',
    component: KafkaConnectComponent,
    data: { title: 'Kafka Connect' }
  },
  {
    path: 'kafka-connect/source-add',
    component: SourceAddComponent,
    data: { title: 'Kafka Connect' }
  },
  {
    path: 'kafka-connect/sink-add',
    component: SinkAddComponent,
    data: { title: 'Kafka Connect' }
  },
  { path: '**', component: ErrorComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SystemHealthComponent,
    ErrorComponent,
    KafkaConnectComponent,
    SourceAddComponent,
    SinkAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [SystemHealthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
