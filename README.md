# React lifecycle 
## Mounting
El componente se monta en el DOM (una vez)

## Updating
El componente se actualiza en el DOM si cambia el estado o las props

## Unmounting
El componente se desmonta del DOM (desaparece)

## Controlar el ciclo de vida de un componente
Para controlar el ciclo de vida de un componente, React nos ofrece un hook llamado useEffect. Este hook nos permite ejecutar código cuando se monta, desmonta o actualiza un componente.

## ¿Qué es un hook?
Un hook es una función especial que nos permite conectarnos con características de React como el estado de un componente (useState) o el ciclo de vida (useEffect).

## Cómo se usa el hook useEffect?
El hook useEffect recibe dos parámetros:
- Una función que se ejecutará cuando React monte o actualice el componente.
- Una lista de dependencias que le indican a React cuando debe volver a ejecutar la función que pasamos como primer parámetro.

```js	
useEffect(() => {
  // código que se ejecutará cuando se monte o actualice el componente
}, [dependencias])
```

## ¿Qué son las dependencias?
Las dependencias son, por ejemplo, las props o el estado de nuestro componente. Si las dependencias no cambian, React no volverá a ejecutar la función que pasamos como primer parámetro al hook useEffect.

## ¿Qué pasa le pasamos un array vacío de dependencias?
Si le pasamos un array vacío de dependencias, React sólo ejecutará la función que pasamos como primer parámetro al hook useEffect cuando se monte el componente.
Esto es muy útil para ejecutar, por ejemplo, peticiones a una API.

```js	
useEffect(() => {
  fetch('https://api.com')
    .then(response => response.json())
    .then(data => setData(data)) // setData es una función que guarda los datos en el estado, así el componente se vuelve a renderizar pero la llamada a la API sólo se hace una vez
}, [])
```
