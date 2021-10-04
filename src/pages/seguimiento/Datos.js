export const Datos = [
    {
        id: 'test1',
        titleEnlace: 'Detalle Pedido', 
        idEnlace:'#test1',
        content: [
            [
                { title: 'Recepción', descripcion: '30/08/21' },
                { title: 'Producto', descripcion: 'Sillas Gamer' },
                { title: 'Peso', descripcion: '3 kg' }
            ]
        ]
    },
    {
        id: 'test2',
        titleEnlace: 'proveedor 1', 
        idEnlace:'#test2',
        content: [
            [
                { title: 'Recepción', descripcion: '20/08/21' },
                { title: 'Producto', descripcion: 'máquinas' },
                { title: 'Peso', descripcion: '3 kg' },
                { title: 'Volumen', descripcion: '1000 (m³)' },
                { title: 'documentos', packingList: 'packing List', invoice: 'Invoice' }
            ],
            [
                { title: 'Recepción', descripcion: '30/08/21' },
                { title: 'Producto', descripcion: 'Sillas Gamer' },
                { title: 'Peso', descripcion: '3 kg' },
                { title: 'Volumen', descripcion: '1000 (m³)' }
            ],
            [
                { title: 'Recepción', descripcion: '30/08/21' },
                { title: 'Producto', descripcion: 'Sillas Gamer' },
                { title: 'Peso', descripcion: '3 kg' },
                { title: 'Volumen', descripcion: '1000 (m³)' }
            ]
        ]
    },
    {
        id: 'test3',
        titleEnlace: 'proveedor 2', 
        idEnlace:'#test3',
        content: [
            [
                { title: 'Recepción', descripcion: '10/06/21' },
                { title: 'Producto', descripcion: 'Carcasas para celulares' },
                { title: 'Peso', descripcion: '3 kg' },
                { title: 'Volumen', descripcion: '1000 (m³)' },
                { title: 'documentos', packingList: 'packing List', invoice: 'Invoice' }
            ],
            [
                { title: 'Recepción', descripcion: '30/08/21' },
                { title: 'Producto', descripcion: 'Sillas Gamer' },
                { title: 'Peso', descripcion: '3 kg' },
                { title: 'Volumen', descripcion: '1000 (m³)' }
            ],
            [
                { title: 'Recepción', descripcion: '30/08/21' },
                { title: 'Producto', descripcion: 'Sillas Gamer' },
                { title: 'Peso', descripcion: '3 kg' },
                { title: 'Volumen', descripcion: '1000 (m³)' }
            ]
        ]
    },
    {
        id: 'test4',
        titleEnlace: 'proveedor 3', 
        idEnlace:'#test4',
        content: [
            [
                { title: 'Recepción', descripcion: '25/09/21' },
                { title: 'Producto', descripcion: 'Sillas Gamer' },
                { title: 'Peso', descripcion: '3 kg' },
                { title: 'Volumen', descripcion: '1000 (m³)' },
                { title: 'documentos', packingList: 'packing List', invoice: 'Invoice' }
            ],
            [
                { title: 'Recepción', descripcion: '30/08/21' },
                { title: 'Producto', descripcion: 'Sillas Gamer' },
                { title: 'Peso', descripcion: '3 kg' },
                { title: 'Volumen', descripcion: '1000 (m³)' }
            ],
            [
                { title: 'Recepción', descripcion: '30/08/21' },
                { title: 'Producto', descripcion: 'Sillas Gamer' },
                { title: 'Peso', descripcion: '3 kg' },
                { title: 'Volumen', descripcion: '1000 (m³)' }
            ]
        ]
    }
]

/* recuerda poner la propiedad obj en el array
Datos.map(function(item,index){
    return(
        <li>
            {item.content.map(function(element,index2){
                return(
                    element.obj.map(function(item3,index3){
                            return(
                                <p>{item3.title} / {item3.descripcion}</p>
                            )
                    })
                    
                )

            })}
        </li>
    )
})*/