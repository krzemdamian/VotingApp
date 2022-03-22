using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Repositories.Abstractions
{
    public interface IRepository<T> where T : class, new ()
    {
        IEnumerable<T> GetAll();
        void Add(T entity);
        void Update(T entity);
    }
}
