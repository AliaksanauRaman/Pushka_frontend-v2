import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'pu-application-card-comment',
  templateUrl: './application-card-comment.component.html',
  styleUrls: ['./application-card-comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ApplicationCardCommentComponent {
  public text =
    'Выезжаю из Минска 17 сентября рано утром. Посылку надо подвезти в район Троещины до обеда около магазин...';
}
