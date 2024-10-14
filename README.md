# Приложение для Взаимопомощи в Университете

Fullstack веб-приложение, направленное на улучшение взаимодействия и взаимопомощи между студентами и сотрудниками университета. Пользователи могут публиковать просьбы о помощи или откликаться на уже существующие посты, что способствует развитию сообщества взаимопомощи.

## Описание

**Приложение для Взаимопомощи в Университете** предоставляет студентам и сотрудникам университета платформу для того, чтобы предложить помощь или попросить о ней. Пользователи могут зарегистрироваться через email или аккаунт Google. После авторизации на главной странице отображаются все опубликованные посты, с возможностью откликнуться на существующие или создать свои собственные. Также реализован функционал фильтрации постов по тегам и бесконечный скроллинг на страницах с постами.

### Основные возможности:
- Регистрация через email или Google аккаунт
- Публикация собственных постов и отклики на существующие
- Фильтрация постов по тегам
- Бесконечный скроллинг на страницах с постами
- Основные страницы:
  - **HOME**: Главная страница с постами
  - **My Posts**: Мои посты
  - **Saved Posts**: Сохранённые посты
  - **Received Otclicks**: Полученные отклики
  - **Sent Otclicks**: Отправленные отклики
  - **Settings**: Настройки
- Возможность смены имени, никнейма, почты и пароля (при регистрации через email)

## Технологии

Проект построен с использованием следующих технологий:

- **Front-End**: React, Next.js, Typescript, Radix UI, React Hook Forms
- **Back-End**: Next.js Server Actions, Prisma ORM
- **Аутентификация**: NextAuth (с поддержкой OAuth через Google и email)
- **База данных**: PostgreSQL
- **Другие библиотеки**: React Query для работы с серверными данными, Zod для валидации данных
