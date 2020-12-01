using Microsoft.EntityFrameworkCore;
using WebAPISample.Models;

namespace WebAPISample.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options)
            :base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Seed data - needs migration

            modelBuilder.Entity<Movie>()
             .HasData(
                new Movie { MovieId = 1, Title = "The Departed", Genre = "Drama", Director = "Martin Scorsese", MovieImage = "https://xl.movieposterdb.com/06_10/2006/0407887/xl_138581_0407887_3f7c779a.jpg"},
                new Movie { MovieId = 2, Title = "The Dark Knight", Genre = "Drama", Director = "Christopher Nolan", MovieImage = "https://xl.movieposterdb.com/08_04/2008/468569/xl_468569_828524e8.jpg" },
                new Movie { MovieId = 3, Title = "Inception", Genre = "Drama", Director = "Christopher Nolan" },
                new Movie { MovieId = 4, Title = "Pineapple Express", Genre = "Comedy", Director = "David Gordon Green", },
                new Movie { MovieId = 5, Title = "Die Hard", Genre = "Action", Director = "John McTiernan", }
             );

        }

        public DbSet<Movie> Movies { get; set; }
    }
}
