using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CinemaProject.Migrations
{
    public partial class fmd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CinemaSessionSeat_Order_OrderId",
                table: "CinemaSessionSeat");

            migrationBuilder.DropIndex(
                name: "IX_CinemaSessionSeat_OrderId",
                table: "CinemaSessionSeat");

            migrationBuilder.DropColumn(
                name: "OrderId",
                table: "CinemaSessionSeat");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "Order",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Order",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<int>(
                name: "OrderId",
                table: "CinemaSessionSeat",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CinemaSessionSeat_OrderId",
                table: "CinemaSessionSeat",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_CinemaSessionSeat_Order_OrderId",
                table: "CinemaSessionSeat",
                column: "OrderId",
                principalTable: "Order",
                principalColumn: "Id");
        }
    }
}
