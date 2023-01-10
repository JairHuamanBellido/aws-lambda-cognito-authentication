import { Container } from "inversify";
import { SessionRepository } from "../../infrastructure/session/repository/SessionRepository";

const DIcontainer = new Container();

DIcontainer.bind<SessionRepository>(SessionRepository).toSelf();

export { DIcontainer };
