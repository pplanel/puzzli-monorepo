import { Module } from "@nestjs/common";
import { AppModule } from "./app/app.module";
import { EventsModule } from "./events/events.module";

@Module({
    imports: [AppModule, EventsModule],
})

export class Application {}
