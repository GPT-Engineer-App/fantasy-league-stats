import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Index = () => {
  const leagueData = {
    leagueName: "Fantasy Premier League",
    teams: [
      { name: "Team A", points: 1200, rank: 1 },
      { name: "Team B", points: 1150, rank: 2 },
      { name: "Team C", points: 1100, rank: 3 },
      { name: "Team D", points: 1050, rank: 4 },
    ],
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">{leagueData.leagueName}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Team Name</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leagueData.teams.map((team, index) => (
                <TableRow key={index}>
                  <TableCell>{team.rank}</TableCell>
                  <TableCell>{team.name}</TableCell>
                  <TableCell>{team.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;