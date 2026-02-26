from django.db import models
from filer.fields.image import FilerImageField


class SliderImage(models.Model):
    """Изображение для фото-слайдера на главной странице."""

    title = models.CharField(
        'Название',
        max_length=255,
        help_text='Отображается как alt-текст изображения',
    )
    image = FilerImageField(
        verbose_name='Изображение',
        on_delete=models.CASCADE,
        related_name='slider_images',
    )
    position = models.PositiveIntegerField(
        'Позиция',
        default=0,
        db_index=True,
    )

    class Meta:
        ordering = ['position']
        verbose_name = 'Изображение слайдера'
        verbose_name_plural = 'Изображения слайдера'

    def __str__(self):
        return self.title