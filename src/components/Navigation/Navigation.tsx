import { LogIn } from "lucide-react";
import React from "react";
import { Container } from "../shared/Container/Container";

export const Navigation = () => {
  return (
    <header className="py-7 border-b mb-20">
      <Container>
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Dungeons<span className="text-2xl text-red-600 font-bold">FIGHT</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <p>Вход</p>
            <LogIn />
          </div>
        </div>
      </Container>
    </header>
  );
};
