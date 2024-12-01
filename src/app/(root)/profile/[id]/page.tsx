import { Container, Typography } from "@/components/shared";
import Image from "next/image";
import React from "react";
import RarityList from "../components/RarityList/RarityList";
import BackPack from "../components/BackPack/BackPack";
import { NextResponse } from "next/server";

const Profile = async ({ params }: { params: { id: string } }) => {
  const res = await fetch(`http://localhost:3000/api/user/${params.id}`);
  const data = await res.json();

  return (
    <div>
      <Container variant="short">
        <div className="flex gap-[34px]">
          <Image src="/dungeonPage/imageUrl.png" alt="profile" width={280} height={380} />
          <div className="flex flex-col gap-[40px]">
            <div>
              <Typography variant="title20_bold" tag="h2">
                {data.name}
              </Typography>
              <Typography color="subtitle" variant="title20_bold" tag="h2">
                {data.email}
              </Typography>
            </div>
            <RarityList />
          </div>
        </div>
        <div className="mt-[40px]">
          <BackPack data={data.inventory} />
        </div>
      </Container>
    </div>
  );
};

export default Profile;
