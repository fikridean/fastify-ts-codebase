import { ObjectId } from "@fastify/mongodb";

export interface Certification {
  id: ObjectId; // or ObjectId, depending on your setup
  name: string;
}
