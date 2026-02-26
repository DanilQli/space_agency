# Space Agency — Тестовый проект

Адаптивный лендинг с динамическим слайдером, галереей и кастомизированной админ-панелью.

**Репозиторий:** [https://github.com/DanilQli/space_agency](https://github.com/DanilQli/space_agency)

---

## Технологический стек

### Backend
- **Python 3.12**
- **Django 5.2**
- **MySQL** (с поддержкой `utf8mb4`)

### Frontend
- **Bootstrap 5** (верстка, адаптивность, Offcanvas меню)
- **Slick Slider** (синхронизированная карусель изображений)
- **Fancybox 3** (полноэкранная галерея)

### Django Plugins
- **django-filer** — продвинутое управление медиафайлами (загрузка фото).
- **django-admin-sortable2** — сортировка записей перетаскиванием (Drag-and-Drop).
- **easy-thumbnails** — автоматическая нарезка миниатюр.

---

## Быстрый старт

Следуйте инструкции, чтобы развернуть проект локально.

### 1. Клонирование репозитория

```bash

git clone https://github.com/DanilQli/space_agency.git
cd space_agency
```
### 2. Виртуальное окружение

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```
**Linux / macOS:**
```bash
python3.12 -m venv venv
source venv/bin/activate
```
### 3. Установка зависимостей
```bash
pip install -r req.pip
```
### 4. Настройка Базы Данных (MySQL)

Создайте базу данных с поддержкой UTF8MB4 (для эмодзи и спецсимволов):
```bash
mysql -u root -p -e "CREATE DATABASE space_agency CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```
> **Важно:** Проверьте файл space_agency/settings.py. В разделе DATABASES убедитесь, что пароль (PASSWORD) совпадает с вашим паролем от MySQL.

### 5. Миграции и Суперпользователь

Примените миграции и создайте администратора:
```bash
python manage.py migrate
python manage.py createsuperuser
```
### 6. Запуск сервера
```bash
python manage.py runserver
```
Проект будет доступен по адресу: http://127.0.0.1:8000/

---

## Как пользоваться Админкой

Адрес: http://127.0.0.1:8000/admin/

1. Перейдите в раздел **"Изображения слайдера"** (Landing).
2. Нажмите **"Добавить"**.
3. Загрузите фото через виджет **Filer**.
4. В списке записей можно менять порядок слайдов простым перетаскиванием (**Drag & Drop**).
5. Изменения порядка применяются на сайте автоматически.
