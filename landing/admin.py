from django.contrib import admin
from django.utils.html import format_html
from adminsortable2.admin import SortableAdminMixin

from .models import SliderImage


@admin.register(SliderImage)
class SliderImageAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ['thumbnail_preview', 'title']
    list_display_links = ['thumbnail_preview', 'title']
    list_per_page = 25

    def thumbnail_preview(self, obj):
        """Миниатюра изображения в списке."""
        if obj.image_id and obj.image:
            return format_html(
                '<img src="{}" style="max-height:60px; max-width:100px; '
                'object-fit:cover; border-radius:4px;" />',
                obj.image.url,
            )
        return '—'

    thumbnail_preview.short_description = 'Превью'