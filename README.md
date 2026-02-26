\# Космическое агентство — тестовый проект



\## Стек

\- Python 3.12, Django 5.2, MySQL

\- Bootstrap 5, Slick Slider, Fancybox 3

\- django-filer, django-admin-sortable2



\## Быстрый старт



```bash

\# 1. Клонировать репозиторий

git clone <repo-url>

cd space\_agency



\# 2. Виртуальное окружение

python3.12 -m venv venv

source venv/bin/activate        # Linux / macOS

\# venv\\Scripts\\activate         # Windows



\# 3. Зависимости

pip install -r req.pip



\# 4. Создать базу MySQL

mysql -u root -p -e "CREATE DATABASE space\_agency CHARACTER SET utf8mb4 COLLATE utf8mb4\_unicode\_ci;"



\# 5. Настроить подключение к БД

\#    → space\_agency/settings.py → DATABASES



\# 6. Миграции

python manage.py migrate



\# 7. Суперпользователь

python manage.py createsuperuser



\# 8. Запуск

python manage.py runserver

