import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Video, VideoSchema } from 'src/schemas/video.schema';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Video.name, schema: VideoSchema
      }
    ]),
    UserModule,
  ],
  controllers: [VideoController],
  providers: [VideoService]
})
export class VideoModule {}
