using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Api.Mappers.Abstractions
{
    public interface ITwoWayMapper<TEntity, TDto>
        where TEntity : new()
        where TDto : new()
    {
        TDto ToDto(TEntity entity);
        TEntity ToEntity(TDto dto);
    }
}
