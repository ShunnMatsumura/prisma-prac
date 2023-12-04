# PrismaPractice
## Datas
- [Doc](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/next-steps-typescript-postgresql)

## Tips
### DBの中身をみるPrisma Studio
```
npx prisma studio
```

## Memos
- schema.prismaが王様

## DM Migration
### 初期マイグレーション
```
npx prisma migrate dev --name init
```

### 追加変更
```
npx prisma migrate dev --name add_xxx_to_user
```

### Add Seed Data
https://www.prisma.io/docs/guides/migrate/seed-database

package.jsonでprisma.seedに指定されたコマンドを実行する仕組み。

```
npx prisma db seed
```