export const dbMicroservices={
    "services": {
        "servicio1": {
            "serviceName": "servicioUsuarios",
            "instances": [
                {
                    "ip": "192.168.0.3",
                    "protocol": "https",
                    "port": 300,
                    "serviceName": "servicio1",
                    "status":"ONLINE"
                }
            ]
        },
        "servicio2": {
            "serviceName": "servicioPaservicio2gos",
            "instances": [
                {
                    "ip": "192.168.0.1",
                    "protocol": "https",
                    "port": 400,
                    "serviceName": "servicio2",
                    "status":"ONLINE"
                },
                {
                    "ip": "192.168.0.2",
                    "protocol": "https",
                    "port": 500,
                    "serviceName": "servicio2",
                    "status":"ONLINE"
                }
            ]
        }
    }
}