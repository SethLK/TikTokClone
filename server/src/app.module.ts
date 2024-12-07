import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { VideoModule } from './video/video.module';


@Module({
  imports: [ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>({
        uri: configService.get<string>('MONGO_DB_CONNECTION_STR'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    }), UserModule, AuthModule, VideoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

