﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPISample.Data;

namespace WebAPISample.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    partial class ApplicationContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("WebAPISample.Models.Movie", b =>
                {
                    b.Property<int>("MovieId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Director")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Genre")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("MovieImage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("MovieId");

                    b.ToTable("Movies");

                    b.HasData(
                        new
                        {
                            MovieId = 1,
                            Director = "Martin Scorsese",
                            Genre = "Drama",
                            MovieImage = "https://xl.movieposterdb.com/06_10/2006/0407887/xl_138581_0407887_3f7c779a.jpg",
                            Title = "The Departed"
                        },
                        new
                        {
                            MovieId = 2,
                            Director = "Christopher Nolan",
                            Genre = "Drama",
                            MovieImage = "https://xl.movieposterdb.com/08_04/2008/468569/xl_468569_828524e8.jpg",
                            Title = "The Dark Knight"
                        },
                        new
                        {
                            MovieId = 3,
                            Director = "Christopher Nolan",
                            Genre = "Drama",
                            MovieImage = "https://xl.movieposterdb.com/10_06/2010/1375666/xl_1375666_5d9403a0.jpg",
                            Title = "Inception"
                        },
                        new
                        {
                            MovieId = 4,
                            Director = "David Gordon Green",
                            Genre = "Comedy",
                            MovieImage = "https://xl.movieposterdb.com/08_08/2008/910936/xl_910936_53c4f8a6.jpg",
                            Title = "Pineapple Express"
                        },
                        new
                        {
                            MovieId = 5,
                            Director = "John McTiernan",
                            Genre = "Action",
                            MovieImage = "https://xl.movieposterdb.com/15_04/1988/95016/xl_95016_989d054a.jpg",
                            Title = "Die Hard"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
