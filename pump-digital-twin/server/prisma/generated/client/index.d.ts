
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Fluido
 * 
 */
export type Fluido = $Result.DefaultSelection<Prisma.$FluidoPayload>
/**
 * Model Unidad
 * 
 */
export type Unidad = $Result.DefaultSelection<Prisma.$UnidadPayload>
/**
 * Model Motor
 * 
 */
export type Motor = $Result.DefaultSelection<Prisma.$MotorPayload>
/**
 * Model Detalles
 * 
 */
export type Detalles = $Result.DefaultSelection<Prisma.$DetallesPayload>
/**
 * Model Banco
 * 
 */
export type Banco = $Result.DefaultSelection<Prisma.$BancoPayload>
/**
 * Model Bomba
 * 
 */
export type Bomba = $Result.DefaultSelection<Prisma.$BombaPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Parametro
 * 
 */
export type Parametro = $Result.DefaultSelection<Prisma.$ParametroPayload>
/**
 * Model Prueba
 * 
 */
export type Prueba = $Result.DefaultSelection<Prisma.$PruebaPayload>
/**
 * Model PruebaParametroValor
 * 
 */
export type PruebaParametroValor = $Result.DefaultSelection<Prisma.$PruebaParametroValorPayload>
/**
 * Model PruebaParametroContinuo
 * 
 */
export type PruebaParametroContinuo = $Result.DefaultSelection<Prisma.$PruebaParametroContinuoPayload>
/**
 * Model PedidoImportado
 * 
 */
export type PedidoImportado = $Result.DefaultSelection<Prisma.$PedidoImportadoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Fluidos
 * const fluidos = await prisma.fluido.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Fluidos
   * const fluidos = await prisma.fluido.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.fluido`: Exposes CRUD operations for the **Fluido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fluidos
    * const fluidos = await prisma.fluido.findMany()
    * ```
    */
  get fluido(): Prisma.FluidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unidad`: Exposes CRUD operations for the **Unidad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Unidads
    * const unidads = await prisma.unidad.findMany()
    * ```
    */
  get unidad(): Prisma.UnidadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.motor`: Exposes CRUD operations for the **Motor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Motors
    * const motors = await prisma.motor.findMany()
    * ```
    */
  get motor(): Prisma.MotorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.detalles`: Exposes CRUD operations for the **Detalles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Detalles
    * const detalles = await prisma.detalles.findMany()
    * ```
    */
  get detalles(): Prisma.DetallesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banco`: Exposes CRUD operations for the **Banco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bancos
    * const bancos = await prisma.banco.findMany()
    * ```
    */
  get banco(): Prisma.BancoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bomba`: Exposes CRUD operations for the **Bomba** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bombas
    * const bombas = await prisma.bomba.findMany()
    * ```
    */
  get bomba(): Prisma.BombaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parametro`: Exposes CRUD operations for the **Parametro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parametros
    * const parametros = await prisma.parametro.findMany()
    * ```
    */
  get parametro(): Prisma.ParametroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prueba`: Exposes CRUD operations for the **Prueba** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pruebas
    * const pruebas = await prisma.prueba.findMany()
    * ```
    */
  get prueba(): Prisma.PruebaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pruebaParametroValor`: Exposes CRUD operations for the **PruebaParametroValor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PruebaParametroValors
    * const pruebaParametroValors = await prisma.pruebaParametroValor.findMany()
    * ```
    */
  get pruebaParametroValor(): Prisma.PruebaParametroValorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pruebaParametroContinuo`: Exposes CRUD operations for the **PruebaParametroContinuo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PruebaParametroContinuos
    * const pruebaParametroContinuos = await prisma.pruebaParametroContinuo.findMany()
    * ```
    */
  get pruebaParametroContinuo(): Prisma.PruebaParametroContinuoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoImportado`: Exposes CRUD operations for the **PedidoImportado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoImportados
    * const pedidoImportados = await prisma.pedidoImportado.findMany()
    * ```
    */
  get pedidoImportado(): Prisma.PedidoImportadoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Fluido: 'Fluido',
    Unidad: 'Unidad',
    Motor: 'Motor',
    Detalles: 'Detalles',
    Banco: 'Banco',
    Bomba: 'Bomba',
    Cliente: 'Cliente',
    Parametro: 'Parametro',
    Prueba: 'Prueba',
    PruebaParametroValor: 'PruebaParametroValor',
    PruebaParametroContinuo: 'PruebaParametroContinuo',
    PedidoImportado: 'PedidoImportado'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "fluido" | "unidad" | "motor" | "detalles" | "banco" | "bomba" | "cliente" | "parametro" | "prueba" | "pruebaParametroValor" | "pruebaParametroContinuo" | "pedidoImportado"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Fluido: {
        payload: Prisma.$FluidoPayload<ExtArgs>
        fields: Prisma.FluidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FluidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FluidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          findFirst: {
            args: Prisma.FluidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FluidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          findMany: {
            args: Prisma.FluidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>[]
          }
          create: {
            args: Prisma.FluidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          createMany: {
            args: Prisma.FluidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FluidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>[]
          }
          delete: {
            args: Prisma.FluidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          update: {
            args: Prisma.FluidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          deleteMany: {
            args: Prisma.FluidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FluidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FluidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>[]
          }
          upsert: {
            args: Prisma.FluidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FluidoPayload>
          }
          aggregate: {
            args: Prisma.FluidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFluido>
          }
          groupBy: {
            args: Prisma.FluidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<FluidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.FluidoCountArgs<ExtArgs>
            result: $Utils.Optional<FluidoCountAggregateOutputType> | number
          }
        }
      }
      Unidad: {
        payload: Prisma.$UnidadPayload<ExtArgs>
        fields: Prisma.UnidadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnidadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnidadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload>
          }
          findFirst: {
            args: Prisma.UnidadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnidadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload>
          }
          findMany: {
            args: Prisma.UnidadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload>[]
          }
          create: {
            args: Prisma.UnidadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload>
          }
          createMany: {
            args: Prisma.UnidadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnidadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload>[]
          }
          delete: {
            args: Prisma.UnidadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload>
          }
          update: {
            args: Prisma.UnidadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload>
          }
          deleteMany: {
            args: Prisma.UnidadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnidadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnidadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload>[]
          }
          upsert: {
            args: Prisma.UnidadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadPayload>
          }
          aggregate: {
            args: Prisma.UnidadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnidad>
          }
          groupBy: {
            args: Prisma.UnidadGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnidadGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnidadCountArgs<ExtArgs>
            result: $Utils.Optional<UnidadCountAggregateOutputType> | number
          }
        }
      }
      Motor: {
        payload: Prisma.$MotorPayload<ExtArgs>
        fields: Prisma.MotorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MotorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MotorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          findFirst: {
            args: Prisma.MotorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MotorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          findMany: {
            args: Prisma.MotorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>[]
          }
          create: {
            args: Prisma.MotorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          createMany: {
            args: Prisma.MotorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MotorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>[]
          }
          delete: {
            args: Prisma.MotorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          update: {
            args: Prisma.MotorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          deleteMany: {
            args: Prisma.MotorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MotorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MotorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>[]
          }
          upsert: {
            args: Prisma.MotorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MotorPayload>
          }
          aggregate: {
            args: Prisma.MotorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMotor>
          }
          groupBy: {
            args: Prisma.MotorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MotorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MotorCountArgs<ExtArgs>
            result: $Utils.Optional<MotorCountAggregateOutputType> | number
          }
        }
      }
      Detalles: {
        payload: Prisma.$DetallesPayload<ExtArgs>
        fields: Prisma.DetallesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DetallesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DetallesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload>
          }
          findFirst: {
            args: Prisma.DetallesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DetallesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload>
          }
          findMany: {
            args: Prisma.DetallesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload>[]
          }
          create: {
            args: Prisma.DetallesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload>
          }
          createMany: {
            args: Prisma.DetallesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DetallesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload>[]
          }
          delete: {
            args: Prisma.DetallesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload>
          }
          update: {
            args: Prisma.DetallesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload>
          }
          deleteMany: {
            args: Prisma.DetallesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DetallesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DetallesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload>[]
          }
          upsert: {
            args: Prisma.DetallesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DetallesPayload>
          }
          aggregate: {
            args: Prisma.DetallesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDetalles>
          }
          groupBy: {
            args: Prisma.DetallesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DetallesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DetallesCountArgs<ExtArgs>
            result: $Utils.Optional<DetallesCountAggregateOutputType> | number
          }
        }
      }
      Banco: {
        payload: Prisma.$BancoPayload<ExtArgs>
        fields: Prisma.BancoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BancoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BancoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          findFirst: {
            args: Prisma.BancoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BancoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          findMany: {
            args: Prisma.BancoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>[]
          }
          create: {
            args: Prisma.BancoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          createMany: {
            args: Prisma.BancoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BancoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>[]
          }
          delete: {
            args: Prisma.BancoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          update: {
            args: Prisma.BancoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          deleteMany: {
            args: Prisma.BancoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BancoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BancoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>[]
          }
          upsert: {
            args: Prisma.BancoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BancoPayload>
          }
          aggregate: {
            args: Prisma.BancoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanco>
          }
          groupBy: {
            args: Prisma.BancoGroupByArgs<ExtArgs>
            result: $Utils.Optional<BancoGroupByOutputType>[]
          }
          count: {
            args: Prisma.BancoCountArgs<ExtArgs>
            result: $Utils.Optional<BancoCountAggregateOutputType> | number
          }
        }
      }
      Bomba: {
        payload: Prisma.$BombaPayload<ExtArgs>
        fields: Prisma.BombaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BombaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BombaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload>
          }
          findFirst: {
            args: Prisma.BombaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BombaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload>
          }
          findMany: {
            args: Prisma.BombaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload>[]
          }
          create: {
            args: Prisma.BombaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload>
          }
          createMany: {
            args: Prisma.BombaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BombaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload>[]
          }
          delete: {
            args: Prisma.BombaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload>
          }
          update: {
            args: Prisma.BombaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload>
          }
          deleteMany: {
            args: Prisma.BombaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BombaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BombaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload>[]
          }
          upsert: {
            args: Prisma.BombaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BombaPayload>
          }
          aggregate: {
            args: Prisma.BombaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBomba>
          }
          groupBy: {
            args: Prisma.BombaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BombaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BombaCountArgs<ExtArgs>
            result: $Utils.Optional<BombaCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Parametro: {
        payload: Prisma.$ParametroPayload<ExtArgs>
        fields: Prisma.ParametroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParametroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParametroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload>
          }
          findFirst: {
            args: Prisma.ParametroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParametroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload>
          }
          findMany: {
            args: Prisma.ParametroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload>[]
          }
          create: {
            args: Prisma.ParametroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload>
          }
          createMany: {
            args: Prisma.ParametroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParametroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload>[]
          }
          delete: {
            args: Prisma.ParametroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload>
          }
          update: {
            args: Prisma.ParametroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload>
          }
          deleteMany: {
            args: Prisma.ParametroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParametroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParametroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload>[]
          }
          upsert: {
            args: Prisma.ParametroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParametroPayload>
          }
          aggregate: {
            args: Prisma.ParametroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParametro>
          }
          groupBy: {
            args: Prisma.ParametroGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParametroGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParametroCountArgs<ExtArgs>
            result: $Utils.Optional<ParametroCountAggregateOutputType> | number
          }
        }
      }
      Prueba: {
        payload: Prisma.$PruebaPayload<ExtArgs>
        fields: Prisma.PruebaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PruebaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PruebaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload>
          }
          findFirst: {
            args: Prisma.PruebaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PruebaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload>
          }
          findMany: {
            args: Prisma.PruebaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload>[]
          }
          create: {
            args: Prisma.PruebaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload>
          }
          createMany: {
            args: Prisma.PruebaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PruebaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload>[]
          }
          delete: {
            args: Prisma.PruebaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload>
          }
          update: {
            args: Prisma.PruebaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload>
          }
          deleteMany: {
            args: Prisma.PruebaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PruebaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PruebaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload>[]
          }
          upsert: {
            args: Prisma.PruebaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaPayload>
          }
          aggregate: {
            args: Prisma.PruebaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrueba>
          }
          groupBy: {
            args: Prisma.PruebaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PruebaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PruebaCountArgs<ExtArgs>
            result: $Utils.Optional<PruebaCountAggregateOutputType> | number
          }
        }
      }
      PruebaParametroValor: {
        payload: Prisma.$PruebaParametroValorPayload<ExtArgs>
        fields: Prisma.PruebaParametroValorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PruebaParametroValorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PruebaParametroValorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload>
          }
          findFirst: {
            args: Prisma.PruebaParametroValorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PruebaParametroValorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload>
          }
          findMany: {
            args: Prisma.PruebaParametroValorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload>[]
          }
          create: {
            args: Prisma.PruebaParametroValorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload>
          }
          createMany: {
            args: Prisma.PruebaParametroValorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PruebaParametroValorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload>[]
          }
          delete: {
            args: Prisma.PruebaParametroValorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload>
          }
          update: {
            args: Prisma.PruebaParametroValorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload>
          }
          deleteMany: {
            args: Prisma.PruebaParametroValorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PruebaParametroValorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PruebaParametroValorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload>[]
          }
          upsert: {
            args: Prisma.PruebaParametroValorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroValorPayload>
          }
          aggregate: {
            args: Prisma.PruebaParametroValorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePruebaParametroValor>
          }
          groupBy: {
            args: Prisma.PruebaParametroValorGroupByArgs<ExtArgs>
            result: $Utils.Optional<PruebaParametroValorGroupByOutputType>[]
          }
          count: {
            args: Prisma.PruebaParametroValorCountArgs<ExtArgs>
            result: $Utils.Optional<PruebaParametroValorCountAggregateOutputType> | number
          }
        }
      }
      PruebaParametroContinuo: {
        payload: Prisma.$PruebaParametroContinuoPayload<ExtArgs>
        fields: Prisma.PruebaParametroContinuoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PruebaParametroContinuoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PruebaParametroContinuoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload>
          }
          findFirst: {
            args: Prisma.PruebaParametroContinuoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PruebaParametroContinuoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload>
          }
          findMany: {
            args: Prisma.PruebaParametroContinuoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload>[]
          }
          create: {
            args: Prisma.PruebaParametroContinuoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload>
          }
          createMany: {
            args: Prisma.PruebaParametroContinuoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PruebaParametroContinuoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload>[]
          }
          delete: {
            args: Prisma.PruebaParametroContinuoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload>
          }
          update: {
            args: Prisma.PruebaParametroContinuoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload>
          }
          deleteMany: {
            args: Prisma.PruebaParametroContinuoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PruebaParametroContinuoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PruebaParametroContinuoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload>[]
          }
          upsert: {
            args: Prisma.PruebaParametroContinuoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PruebaParametroContinuoPayload>
          }
          aggregate: {
            args: Prisma.PruebaParametroContinuoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePruebaParametroContinuo>
          }
          groupBy: {
            args: Prisma.PruebaParametroContinuoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PruebaParametroContinuoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PruebaParametroContinuoCountArgs<ExtArgs>
            result: $Utils.Optional<PruebaParametroContinuoCountAggregateOutputType> | number
          }
        }
      }
      PedidoImportado: {
        payload: Prisma.$PedidoImportadoPayload<ExtArgs>
        fields: Prisma.PedidoImportadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoImportadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoImportadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload>
          }
          findFirst: {
            args: Prisma.PedidoImportadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoImportadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload>
          }
          findMany: {
            args: Prisma.PedidoImportadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload>[]
          }
          create: {
            args: Prisma.PedidoImportadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload>
          }
          createMany: {
            args: Prisma.PedidoImportadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoImportadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload>[]
          }
          delete: {
            args: Prisma.PedidoImportadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload>
          }
          update: {
            args: Prisma.PedidoImportadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoImportadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoImportadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoImportadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoImportadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoImportadoPayload>
          }
          aggregate: {
            args: Prisma.PedidoImportadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoImportado>
          }
          groupBy: {
            args: Prisma.PedidoImportadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoImportadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoImportadoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoImportadoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    fluido?: FluidoOmit
    unidad?: UnidadOmit
    motor?: MotorOmit
    detalles?: DetallesOmit
    banco?: BancoOmit
    bomba?: BombaOmit
    cliente?: ClienteOmit
    parametro?: ParametroOmit
    prueba?: PruebaOmit
    pruebaParametroValor?: PruebaParametroValorOmit
    pruebaParametroContinuo?: PruebaParametroContinuoOmit
    pedidoImportado?: PedidoImportadoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UnidadCountOutputType
   */

  export type UnidadCountOutputType = {
    parametros: number
  }

  export type UnidadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parametros?: boolean | UnidadCountOutputTypeCountParametrosArgs
  }

  // Custom InputTypes
  /**
   * UnidadCountOutputType without action
   */
  export type UnidadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadCountOutputType
     */
    select?: UnidadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnidadCountOutputType without action
   */
  export type UnidadCountOutputTypeCountParametrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParametroWhereInput
  }


  /**
   * Count Type MotorCountOutputType
   */

  export type MotorCountOutputType = {
    pruebas: number
  }

  export type MotorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | MotorCountOutputTypeCountPruebasArgs
  }

  // Custom InputTypes
  /**
   * MotorCountOutputType without action
   */
  export type MotorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MotorCountOutputType
     */
    select?: MotorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MotorCountOutputType without action
   */
  export type MotorCountOutputTypeCountPruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaWhereInput
  }


  /**
   * Count Type DetallesCountOutputType
   */

  export type DetallesCountOutputType = {
    pruebas: number
  }

  export type DetallesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | DetallesCountOutputTypeCountPruebasArgs
  }

  // Custom InputTypes
  /**
   * DetallesCountOutputType without action
   */
  export type DetallesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DetallesCountOutputType
     */
    select?: DetallesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DetallesCountOutputType without action
   */
  export type DetallesCountOutputTypeCountPruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaWhereInput
  }


  /**
   * Count Type BancoCountOutputType
   */

  export type BancoCountOutputType = {
    pruebas: number
  }

  export type BancoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | BancoCountOutputTypeCountPruebasArgs
  }

  // Custom InputTypes
  /**
   * BancoCountOutputType without action
   */
  export type BancoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BancoCountOutputType
     */
    select?: BancoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BancoCountOutputType without action
   */
  export type BancoCountOutputTypeCountPruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaWhereInput
  }


  /**
   * Count Type BombaCountOutputType
   */

  export type BombaCountOutputType = {
    pruebas: number
  }

  export type BombaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | BombaCountOutputTypeCountPruebasArgs
  }

  // Custom InputTypes
  /**
   * BombaCountOutputType without action
   */
  export type BombaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BombaCountOutputType
     */
    select?: BombaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BombaCountOutputType without action
   */
  export type BombaCountOutputTypeCountPruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    pruebas: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | ClienteCountOutputTypeCountPruebasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaWhereInput
  }


  /**
   * Count Type ParametroCountOutputType
   */

  export type ParametroCountOutputType = {
    valores: number
    continuos: number
  }

  export type ParametroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valores?: boolean | ParametroCountOutputTypeCountValoresArgs
    continuos?: boolean | ParametroCountOutputTypeCountContinuosArgs
  }

  // Custom InputTypes
  /**
   * ParametroCountOutputType without action
   */
  export type ParametroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParametroCountOutputType
     */
    select?: ParametroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParametroCountOutputType without action
   */
  export type ParametroCountOutputTypeCountValoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaParametroValorWhereInput
  }

  /**
   * ParametroCountOutputType without action
   */
  export type ParametroCountOutputTypeCountContinuosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaParametroContinuoWhereInput
  }


  /**
   * Count Type PruebaCountOutputType
   */

  export type PruebaCountOutputType = {
    valores: number
    continuos: number
  }

  export type PruebaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    valores?: boolean | PruebaCountOutputTypeCountValoresArgs
    continuos?: boolean | PruebaCountOutputTypeCountContinuosArgs
  }

  // Custom InputTypes
  /**
   * PruebaCountOutputType without action
   */
  export type PruebaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaCountOutputType
     */
    select?: PruebaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PruebaCountOutputType without action
   */
  export type PruebaCountOutputTypeCountValoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaParametroValorWhereInput
  }

  /**
   * PruebaCountOutputType without action
   */
  export type PruebaCountOutputTypeCountContinuosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaParametroContinuoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Fluido
   */

  export type AggregateFluido = {
    _count: FluidoCountAggregateOutputType | null
    _avg: FluidoAvgAggregateOutputType | null
    _sum: FluidoSumAggregateOutputType | null
    _min: FluidoMinAggregateOutputType | null
    _max: FluidoMaxAggregateOutputType | null
  }

  export type FluidoAvgAggregateOutputType = {
    id: number | null
    temperatura: number | null
    viscosidad: number | null
    densidad: number | null
    caudal: number | null
    altura: number | null
    velocidad: number | null
    potencia: number | null
    rendimiento: number | null
    caudalCoeficiente: number | null
    alturaCoeficiente: number | null
    rendimientoCoeficiente: number | null
    npshRequerido: number | null
  }

  export type FluidoSumAggregateOutputType = {
    id: number | null
    temperatura: number | null
    viscosidad: number | null
    densidad: number | null
    caudal: number | null
    altura: number | null
    velocidad: number | null
    potencia: number | null
    rendimiento: number | null
    caudalCoeficiente: number | null
    alturaCoeficiente: number | null
    rendimientoCoeficiente: number | null
    npshRequerido: number | null
  }

  export type FluidoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    temperatura: number | null
    viscosidad: number | null
    densidad: number | null
    caudal: number | null
    altura: number | null
    velocidad: number | null
    potencia: number | null
    rendimiento: number | null
    caudalCoeficiente: number | null
    alturaCoeficiente: number | null
    rendimientoCoeficiente: number | null
    npshRequerido: number | null
  }

  export type FluidoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    temperatura: number | null
    viscosidad: number | null
    densidad: number | null
    caudal: number | null
    altura: number | null
    velocidad: number | null
    potencia: number | null
    rendimiento: number | null
    caudalCoeficiente: number | null
    alturaCoeficiente: number | null
    rendimientoCoeficiente: number | null
    npshRequerido: number | null
  }

  export type FluidoCountAggregateOutputType = {
    id: number
    nombre: number
    temperatura: number
    viscosidad: number
    densidad: number
    caudal: number
    altura: number
    velocidad: number
    potencia: number
    rendimiento: number
    caudalCoeficiente: number
    alturaCoeficiente: number
    rendimientoCoeficiente: number
    npshRequerido: number
    _all: number
  }


  export type FluidoAvgAggregateInputType = {
    id?: true
    temperatura?: true
    viscosidad?: true
    densidad?: true
    caudal?: true
    altura?: true
    velocidad?: true
    potencia?: true
    rendimiento?: true
    caudalCoeficiente?: true
    alturaCoeficiente?: true
    rendimientoCoeficiente?: true
    npshRequerido?: true
  }

  export type FluidoSumAggregateInputType = {
    id?: true
    temperatura?: true
    viscosidad?: true
    densidad?: true
    caudal?: true
    altura?: true
    velocidad?: true
    potencia?: true
    rendimiento?: true
    caudalCoeficiente?: true
    alturaCoeficiente?: true
    rendimientoCoeficiente?: true
    npshRequerido?: true
  }

  export type FluidoMinAggregateInputType = {
    id?: true
    nombre?: true
    temperatura?: true
    viscosidad?: true
    densidad?: true
    caudal?: true
    altura?: true
    velocidad?: true
    potencia?: true
    rendimiento?: true
    caudalCoeficiente?: true
    alturaCoeficiente?: true
    rendimientoCoeficiente?: true
    npshRequerido?: true
  }

  export type FluidoMaxAggregateInputType = {
    id?: true
    nombre?: true
    temperatura?: true
    viscosidad?: true
    densidad?: true
    caudal?: true
    altura?: true
    velocidad?: true
    potencia?: true
    rendimiento?: true
    caudalCoeficiente?: true
    alturaCoeficiente?: true
    rendimientoCoeficiente?: true
    npshRequerido?: true
  }

  export type FluidoCountAggregateInputType = {
    id?: true
    nombre?: true
    temperatura?: true
    viscosidad?: true
    densidad?: true
    caudal?: true
    altura?: true
    velocidad?: true
    potencia?: true
    rendimiento?: true
    caudalCoeficiente?: true
    alturaCoeficiente?: true
    rendimientoCoeficiente?: true
    npshRequerido?: true
    _all?: true
  }

  export type FluidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fluido to aggregate.
     */
    where?: FluidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fluidos to fetch.
     */
    orderBy?: FluidoOrderByWithRelationInput | FluidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FluidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fluidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fluidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fluidos
    **/
    _count?: true | FluidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FluidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FluidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FluidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FluidoMaxAggregateInputType
  }

  export type GetFluidoAggregateType<T extends FluidoAggregateArgs> = {
        [P in keyof T & keyof AggregateFluido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFluido[P]>
      : GetScalarType<T[P], AggregateFluido[P]>
  }




  export type FluidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FluidoWhereInput
    orderBy?: FluidoOrderByWithAggregationInput | FluidoOrderByWithAggregationInput[]
    by: FluidoScalarFieldEnum[] | FluidoScalarFieldEnum
    having?: FluidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FluidoCountAggregateInputType | true
    _avg?: FluidoAvgAggregateInputType
    _sum?: FluidoSumAggregateInputType
    _min?: FluidoMinAggregateInputType
    _max?: FluidoMaxAggregateInputType
  }

  export type FluidoGroupByOutputType = {
    id: number
    nombre: string
    temperatura: number | null
    viscosidad: number | null
    densidad: number | null
    caudal: number | null
    altura: number | null
    velocidad: number | null
    potencia: number | null
    rendimiento: number | null
    caudalCoeficiente: number | null
    alturaCoeficiente: number | null
    rendimientoCoeficiente: number | null
    npshRequerido: number | null
    _count: FluidoCountAggregateOutputType | null
    _avg: FluidoAvgAggregateOutputType | null
    _sum: FluidoSumAggregateOutputType | null
    _min: FluidoMinAggregateOutputType | null
    _max: FluidoMaxAggregateOutputType | null
  }

  type GetFluidoGroupByPayload<T extends FluidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FluidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FluidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FluidoGroupByOutputType[P]>
            : GetScalarType<T[P], FluidoGroupByOutputType[P]>
        }
      >
    >


  export type FluidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    temperatura?: boolean
    viscosidad?: boolean
    densidad?: boolean
    caudal?: boolean
    altura?: boolean
    velocidad?: boolean
    potencia?: boolean
    rendimiento?: boolean
    caudalCoeficiente?: boolean
    alturaCoeficiente?: boolean
    rendimientoCoeficiente?: boolean
    npshRequerido?: boolean
  }, ExtArgs["result"]["fluido"]>

  export type FluidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    temperatura?: boolean
    viscosidad?: boolean
    densidad?: boolean
    caudal?: boolean
    altura?: boolean
    velocidad?: boolean
    potencia?: boolean
    rendimiento?: boolean
    caudalCoeficiente?: boolean
    alturaCoeficiente?: boolean
    rendimientoCoeficiente?: boolean
    npshRequerido?: boolean
  }, ExtArgs["result"]["fluido"]>

  export type FluidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    temperatura?: boolean
    viscosidad?: boolean
    densidad?: boolean
    caudal?: boolean
    altura?: boolean
    velocidad?: boolean
    potencia?: boolean
    rendimiento?: boolean
    caudalCoeficiente?: boolean
    alturaCoeficiente?: boolean
    rendimientoCoeficiente?: boolean
    npshRequerido?: boolean
  }, ExtArgs["result"]["fluido"]>

  export type FluidoSelectScalar = {
    id?: boolean
    nombre?: boolean
    temperatura?: boolean
    viscosidad?: boolean
    densidad?: boolean
    caudal?: boolean
    altura?: boolean
    velocidad?: boolean
    potencia?: boolean
    rendimiento?: boolean
    caudalCoeficiente?: boolean
    alturaCoeficiente?: boolean
    rendimientoCoeficiente?: boolean
    npshRequerido?: boolean
  }

  export type FluidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "temperatura" | "viscosidad" | "densidad" | "caudal" | "altura" | "velocidad" | "potencia" | "rendimiento" | "caudalCoeficiente" | "alturaCoeficiente" | "rendimientoCoeficiente" | "npshRequerido", ExtArgs["result"]["fluido"]>

  export type $FluidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fluido"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      temperatura: number | null
      viscosidad: number | null
      densidad: number | null
      caudal: number | null
      altura: number | null
      velocidad: number | null
      potencia: number | null
      rendimiento: number | null
      caudalCoeficiente: number | null
      alturaCoeficiente: number | null
      rendimientoCoeficiente: number | null
      npshRequerido: number | null
    }, ExtArgs["result"]["fluido"]>
    composites: {}
  }

  type FluidoGetPayload<S extends boolean | null | undefined | FluidoDefaultArgs> = $Result.GetResult<Prisma.$FluidoPayload, S>

  type FluidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FluidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FluidoCountAggregateInputType | true
    }

  export interface FluidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fluido'], meta: { name: 'Fluido' } }
    /**
     * Find zero or one Fluido that matches the filter.
     * @param {FluidoFindUniqueArgs} args - Arguments to find a Fluido
     * @example
     * // Get one Fluido
     * const fluido = await prisma.fluido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FluidoFindUniqueArgs>(args: SelectSubset<T, FluidoFindUniqueArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fluido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FluidoFindUniqueOrThrowArgs} args - Arguments to find a Fluido
     * @example
     * // Get one Fluido
     * const fluido = await prisma.fluido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FluidoFindUniqueOrThrowArgs>(args: SelectSubset<T, FluidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fluido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoFindFirstArgs} args - Arguments to find a Fluido
     * @example
     * // Get one Fluido
     * const fluido = await prisma.fluido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FluidoFindFirstArgs>(args?: SelectSubset<T, FluidoFindFirstArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fluido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoFindFirstOrThrowArgs} args - Arguments to find a Fluido
     * @example
     * // Get one Fluido
     * const fluido = await prisma.fluido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FluidoFindFirstOrThrowArgs>(args?: SelectSubset<T, FluidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fluidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fluidos
     * const fluidos = await prisma.fluido.findMany()
     * 
     * // Get first 10 Fluidos
     * const fluidos = await prisma.fluido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fluidoWithIdOnly = await prisma.fluido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FluidoFindManyArgs>(args?: SelectSubset<T, FluidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fluido.
     * @param {FluidoCreateArgs} args - Arguments to create a Fluido.
     * @example
     * // Create one Fluido
     * const Fluido = await prisma.fluido.create({
     *   data: {
     *     // ... data to create a Fluido
     *   }
     * })
     * 
     */
    create<T extends FluidoCreateArgs>(args: SelectSubset<T, FluidoCreateArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fluidos.
     * @param {FluidoCreateManyArgs} args - Arguments to create many Fluidos.
     * @example
     * // Create many Fluidos
     * const fluido = await prisma.fluido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FluidoCreateManyArgs>(args?: SelectSubset<T, FluidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fluidos and returns the data saved in the database.
     * @param {FluidoCreateManyAndReturnArgs} args - Arguments to create many Fluidos.
     * @example
     * // Create many Fluidos
     * const fluido = await prisma.fluido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fluidos and only return the `id`
     * const fluidoWithIdOnly = await prisma.fluido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FluidoCreateManyAndReturnArgs>(args?: SelectSubset<T, FluidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fluido.
     * @param {FluidoDeleteArgs} args - Arguments to delete one Fluido.
     * @example
     * // Delete one Fluido
     * const Fluido = await prisma.fluido.delete({
     *   where: {
     *     // ... filter to delete one Fluido
     *   }
     * })
     * 
     */
    delete<T extends FluidoDeleteArgs>(args: SelectSubset<T, FluidoDeleteArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fluido.
     * @param {FluidoUpdateArgs} args - Arguments to update one Fluido.
     * @example
     * // Update one Fluido
     * const fluido = await prisma.fluido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FluidoUpdateArgs>(args: SelectSubset<T, FluidoUpdateArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fluidos.
     * @param {FluidoDeleteManyArgs} args - Arguments to filter Fluidos to delete.
     * @example
     * // Delete a few Fluidos
     * const { count } = await prisma.fluido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FluidoDeleteManyArgs>(args?: SelectSubset<T, FluidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fluidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fluidos
     * const fluido = await prisma.fluido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FluidoUpdateManyArgs>(args: SelectSubset<T, FluidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fluidos and returns the data updated in the database.
     * @param {FluidoUpdateManyAndReturnArgs} args - Arguments to update many Fluidos.
     * @example
     * // Update many Fluidos
     * const fluido = await prisma.fluido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fluidos and only return the `id`
     * const fluidoWithIdOnly = await prisma.fluido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FluidoUpdateManyAndReturnArgs>(args: SelectSubset<T, FluidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fluido.
     * @param {FluidoUpsertArgs} args - Arguments to update or create a Fluido.
     * @example
     * // Update or create a Fluido
     * const fluido = await prisma.fluido.upsert({
     *   create: {
     *     // ... data to create a Fluido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fluido we want to update
     *   }
     * })
     */
    upsert<T extends FluidoUpsertArgs>(args: SelectSubset<T, FluidoUpsertArgs<ExtArgs>>): Prisma__FluidoClient<$Result.GetResult<Prisma.$FluidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fluidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoCountArgs} args - Arguments to filter Fluidos to count.
     * @example
     * // Count the number of Fluidos
     * const count = await prisma.fluido.count({
     *   where: {
     *     // ... the filter for the Fluidos we want to count
     *   }
     * })
    **/
    count<T extends FluidoCountArgs>(
      args?: Subset<T, FluidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FluidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fluido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FluidoAggregateArgs>(args: Subset<T, FluidoAggregateArgs>): Prisma.PrismaPromise<GetFluidoAggregateType<T>>

    /**
     * Group by Fluido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FluidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FluidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FluidoGroupByArgs['orderBy'] }
        : { orderBy?: FluidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FluidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFluidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fluido model
   */
  readonly fields: FluidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fluido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FluidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fluido model
   */
  interface FluidoFieldRefs {
    readonly id: FieldRef<"Fluido", 'Int'>
    readonly nombre: FieldRef<"Fluido", 'String'>
    readonly temperatura: FieldRef<"Fluido", 'Float'>
    readonly viscosidad: FieldRef<"Fluido", 'Float'>
    readonly densidad: FieldRef<"Fluido", 'Float'>
    readonly caudal: FieldRef<"Fluido", 'Float'>
    readonly altura: FieldRef<"Fluido", 'Float'>
    readonly velocidad: FieldRef<"Fluido", 'Float'>
    readonly potencia: FieldRef<"Fluido", 'Float'>
    readonly rendimiento: FieldRef<"Fluido", 'Float'>
    readonly caudalCoeficiente: FieldRef<"Fluido", 'Float'>
    readonly alturaCoeficiente: FieldRef<"Fluido", 'Float'>
    readonly rendimientoCoeficiente: FieldRef<"Fluido", 'Float'>
    readonly npshRequerido: FieldRef<"Fluido", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Fluido findUnique
   */
  export type FluidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * Filter, which Fluido to fetch.
     */
    where: FluidoWhereUniqueInput
  }

  /**
   * Fluido findUniqueOrThrow
   */
  export type FluidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * Filter, which Fluido to fetch.
     */
    where: FluidoWhereUniqueInput
  }

  /**
   * Fluido findFirst
   */
  export type FluidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * Filter, which Fluido to fetch.
     */
    where?: FluidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fluidos to fetch.
     */
    orderBy?: FluidoOrderByWithRelationInput | FluidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fluidos.
     */
    cursor?: FluidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fluidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fluidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fluidos.
     */
    distinct?: FluidoScalarFieldEnum | FluidoScalarFieldEnum[]
  }

  /**
   * Fluido findFirstOrThrow
   */
  export type FluidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * Filter, which Fluido to fetch.
     */
    where?: FluidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fluidos to fetch.
     */
    orderBy?: FluidoOrderByWithRelationInput | FluidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fluidos.
     */
    cursor?: FluidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fluidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fluidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fluidos.
     */
    distinct?: FluidoScalarFieldEnum | FluidoScalarFieldEnum[]
  }

  /**
   * Fluido findMany
   */
  export type FluidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * Filter, which Fluidos to fetch.
     */
    where?: FluidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fluidos to fetch.
     */
    orderBy?: FluidoOrderByWithRelationInput | FluidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fluidos.
     */
    cursor?: FluidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fluidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fluidos.
     */
    skip?: number
    distinct?: FluidoScalarFieldEnum | FluidoScalarFieldEnum[]
  }

  /**
   * Fluido create
   */
  export type FluidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * The data needed to create a Fluido.
     */
    data: XOR<FluidoCreateInput, FluidoUncheckedCreateInput>
  }

  /**
   * Fluido createMany
   */
  export type FluidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fluidos.
     */
    data: FluidoCreateManyInput | FluidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fluido createManyAndReturn
   */
  export type FluidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * The data used to create many Fluidos.
     */
    data: FluidoCreateManyInput | FluidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fluido update
   */
  export type FluidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * The data needed to update a Fluido.
     */
    data: XOR<FluidoUpdateInput, FluidoUncheckedUpdateInput>
    /**
     * Choose, which Fluido to update.
     */
    where: FluidoWhereUniqueInput
  }

  /**
   * Fluido updateMany
   */
  export type FluidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fluidos.
     */
    data: XOR<FluidoUpdateManyMutationInput, FluidoUncheckedUpdateManyInput>
    /**
     * Filter which Fluidos to update
     */
    where?: FluidoWhereInput
    /**
     * Limit how many Fluidos to update.
     */
    limit?: number
  }

  /**
   * Fluido updateManyAndReturn
   */
  export type FluidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * The data used to update Fluidos.
     */
    data: XOR<FluidoUpdateManyMutationInput, FluidoUncheckedUpdateManyInput>
    /**
     * Filter which Fluidos to update
     */
    where?: FluidoWhereInput
    /**
     * Limit how many Fluidos to update.
     */
    limit?: number
  }

  /**
   * Fluido upsert
   */
  export type FluidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * The filter to search for the Fluido to update in case it exists.
     */
    where: FluidoWhereUniqueInput
    /**
     * In case the Fluido found by the `where` argument doesn't exist, create a new Fluido with this data.
     */
    create: XOR<FluidoCreateInput, FluidoUncheckedCreateInput>
    /**
     * In case the Fluido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FluidoUpdateInput, FluidoUncheckedUpdateInput>
  }

  /**
   * Fluido delete
   */
  export type FluidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
    /**
     * Filter which Fluido to delete.
     */
    where: FluidoWhereUniqueInput
  }

  /**
   * Fluido deleteMany
   */
  export type FluidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fluidos to delete
     */
    where?: FluidoWhereInput
    /**
     * Limit how many Fluidos to delete.
     */
    limit?: number
  }

  /**
   * Fluido without action
   */
  export type FluidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fluido
     */
    select?: FluidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fluido
     */
    omit?: FluidoOmit<ExtArgs> | null
  }


  /**
   * Model Unidad
   */

  export type AggregateUnidad = {
    _count: UnidadCountAggregateOutputType | null
    _avg: UnidadAvgAggregateOutputType | null
    _sum: UnidadSumAggregateOutputType | null
    _min: UnidadMinAggregateOutputType | null
    _max: UnidadMaxAggregateOutputType | null
  }

  export type UnidadAvgAggregateOutputType = {
    id: number | null
  }

  export type UnidadSumAggregateOutputType = {
    id: number | null
  }

  export type UnidadMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type UnidadMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type UnidadCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type UnidadAvgAggregateInputType = {
    id?: true
  }

  export type UnidadSumAggregateInputType = {
    id?: true
  }

  export type UnidadMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type UnidadMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type UnidadCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type UnidadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unidad to aggregate.
     */
    where?: UnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidads to fetch.
     */
    orderBy?: UnidadOrderByWithRelationInput | UnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Unidads
    **/
    _count?: true | UnidadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnidadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnidadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnidadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnidadMaxAggregateInputType
  }

  export type GetUnidadAggregateType<T extends UnidadAggregateArgs> = {
        [P in keyof T & keyof AggregateUnidad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnidad[P]>
      : GetScalarType<T[P], AggregateUnidad[P]>
  }




  export type UnidadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnidadWhereInput
    orderBy?: UnidadOrderByWithAggregationInput | UnidadOrderByWithAggregationInput[]
    by: UnidadScalarFieldEnum[] | UnidadScalarFieldEnum
    having?: UnidadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnidadCountAggregateInputType | true
    _avg?: UnidadAvgAggregateInputType
    _sum?: UnidadSumAggregateInputType
    _min?: UnidadMinAggregateInputType
    _max?: UnidadMaxAggregateInputType
  }

  export type UnidadGroupByOutputType = {
    id: number
    nombre: string
    _count: UnidadCountAggregateOutputType | null
    _avg: UnidadAvgAggregateOutputType | null
    _sum: UnidadSumAggregateOutputType | null
    _min: UnidadMinAggregateOutputType | null
    _max: UnidadMaxAggregateOutputType | null
  }

  type GetUnidadGroupByPayload<T extends UnidadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnidadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnidadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnidadGroupByOutputType[P]>
            : GetScalarType<T[P], UnidadGroupByOutputType[P]>
        }
      >
    >


  export type UnidadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    parametros?: boolean | Unidad$parametrosArgs<ExtArgs>
    _count?: boolean | UnidadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidad"]>

  export type UnidadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["unidad"]>

  export type UnidadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["unidad"]>

  export type UnidadSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type UnidadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["unidad"]>
  export type UnidadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parametros?: boolean | Unidad$parametrosArgs<ExtArgs>
    _count?: boolean | UnidadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnidadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UnidadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UnidadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unidad"
    objects: {
      parametros: Prisma.$ParametroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["unidad"]>
    composites: {}
  }

  type UnidadGetPayload<S extends boolean | null | undefined | UnidadDefaultArgs> = $Result.GetResult<Prisma.$UnidadPayload, S>

  type UnidadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnidadCountAggregateInputType | true
    }

  export interface UnidadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unidad'], meta: { name: 'Unidad' } }
    /**
     * Find zero or one Unidad that matches the filter.
     * @param {UnidadFindUniqueArgs} args - Arguments to find a Unidad
     * @example
     * // Get one Unidad
     * const unidad = await prisma.unidad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnidadFindUniqueArgs>(args: SelectSubset<T, UnidadFindUniqueArgs<ExtArgs>>): Prisma__UnidadClient<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unidad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnidadFindUniqueOrThrowArgs} args - Arguments to find a Unidad
     * @example
     * // Get one Unidad
     * const unidad = await prisma.unidad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnidadFindUniqueOrThrowArgs>(args: SelectSubset<T, UnidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnidadClient<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadFindFirstArgs} args - Arguments to find a Unidad
     * @example
     * // Get one Unidad
     * const unidad = await prisma.unidad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnidadFindFirstArgs>(args?: SelectSubset<T, UnidadFindFirstArgs<ExtArgs>>): Prisma__UnidadClient<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unidad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadFindFirstOrThrowArgs} args - Arguments to find a Unidad
     * @example
     * // Get one Unidad
     * const unidad = await prisma.unidad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnidadFindFirstOrThrowArgs>(args?: SelectSubset<T, UnidadFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnidadClient<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Unidads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Unidads
     * const unidads = await prisma.unidad.findMany()
     * 
     * // Get first 10 Unidads
     * const unidads = await prisma.unidad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unidadWithIdOnly = await prisma.unidad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnidadFindManyArgs>(args?: SelectSubset<T, UnidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unidad.
     * @param {UnidadCreateArgs} args - Arguments to create a Unidad.
     * @example
     * // Create one Unidad
     * const Unidad = await prisma.unidad.create({
     *   data: {
     *     // ... data to create a Unidad
     *   }
     * })
     * 
     */
    create<T extends UnidadCreateArgs>(args: SelectSubset<T, UnidadCreateArgs<ExtArgs>>): Prisma__UnidadClient<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Unidads.
     * @param {UnidadCreateManyArgs} args - Arguments to create many Unidads.
     * @example
     * // Create many Unidads
     * const unidad = await prisma.unidad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnidadCreateManyArgs>(args?: SelectSubset<T, UnidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Unidads and returns the data saved in the database.
     * @param {UnidadCreateManyAndReturnArgs} args - Arguments to create many Unidads.
     * @example
     * // Create many Unidads
     * const unidad = await prisma.unidad.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Unidads and only return the `id`
     * const unidadWithIdOnly = await prisma.unidad.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnidadCreateManyAndReturnArgs>(args?: SelectSubset<T, UnidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unidad.
     * @param {UnidadDeleteArgs} args - Arguments to delete one Unidad.
     * @example
     * // Delete one Unidad
     * const Unidad = await prisma.unidad.delete({
     *   where: {
     *     // ... filter to delete one Unidad
     *   }
     * })
     * 
     */
    delete<T extends UnidadDeleteArgs>(args: SelectSubset<T, UnidadDeleteArgs<ExtArgs>>): Prisma__UnidadClient<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unidad.
     * @param {UnidadUpdateArgs} args - Arguments to update one Unidad.
     * @example
     * // Update one Unidad
     * const unidad = await prisma.unidad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnidadUpdateArgs>(args: SelectSubset<T, UnidadUpdateArgs<ExtArgs>>): Prisma__UnidadClient<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Unidads.
     * @param {UnidadDeleteManyArgs} args - Arguments to filter Unidads to delete.
     * @example
     * // Delete a few Unidads
     * const { count } = await prisma.unidad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnidadDeleteManyArgs>(args?: SelectSubset<T, UnidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Unidads
     * const unidad = await prisma.unidad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnidadUpdateManyArgs>(args: SelectSubset<T, UnidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Unidads and returns the data updated in the database.
     * @param {UnidadUpdateManyAndReturnArgs} args - Arguments to update many Unidads.
     * @example
     * // Update many Unidads
     * const unidad = await prisma.unidad.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Unidads and only return the `id`
     * const unidadWithIdOnly = await prisma.unidad.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnidadUpdateManyAndReturnArgs>(args: SelectSubset<T, UnidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unidad.
     * @param {UnidadUpsertArgs} args - Arguments to update or create a Unidad.
     * @example
     * // Update or create a Unidad
     * const unidad = await prisma.unidad.upsert({
     *   create: {
     *     // ... data to create a Unidad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unidad we want to update
     *   }
     * })
     */
    upsert<T extends UnidadUpsertArgs>(args: SelectSubset<T, UnidadUpsertArgs<ExtArgs>>): Prisma__UnidadClient<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Unidads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadCountArgs} args - Arguments to filter Unidads to count.
     * @example
     * // Count the number of Unidads
     * const count = await prisma.unidad.count({
     *   where: {
     *     // ... the filter for the Unidads we want to count
     *   }
     * })
    **/
    count<T extends UnidadCountArgs>(
      args?: Subset<T, UnidadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnidadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnidadAggregateArgs>(args: Subset<T, UnidadAggregateArgs>): Prisma.PrismaPromise<GetUnidadAggregateType<T>>

    /**
     * Group by Unidad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnidadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnidadGroupByArgs['orderBy'] }
        : { orderBy?: UnidadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unidad model
   */
  readonly fields: UnidadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unidad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnidadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parametros<T extends Unidad$parametrosArgs<ExtArgs> = {}>(args?: Subset<T, Unidad$parametrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unidad model
   */
  interface UnidadFieldRefs {
    readonly id: FieldRef<"Unidad", 'Int'>
    readonly nombre: FieldRef<"Unidad", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unidad findUnique
   */
  export type UnidadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
    /**
     * Filter, which Unidad to fetch.
     */
    where: UnidadWhereUniqueInput
  }

  /**
   * Unidad findUniqueOrThrow
   */
  export type UnidadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
    /**
     * Filter, which Unidad to fetch.
     */
    where: UnidadWhereUniqueInput
  }

  /**
   * Unidad findFirst
   */
  export type UnidadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
    /**
     * Filter, which Unidad to fetch.
     */
    where?: UnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidads to fetch.
     */
    orderBy?: UnidadOrderByWithRelationInput | UnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unidads.
     */
    cursor?: UnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unidads.
     */
    distinct?: UnidadScalarFieldEnum | UnidadScalarFieldEnum[]
  }

  /**
   * Unidad findFirstOrThrow
   */
  export type UnidadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
    /**
     * Filter, which Unidad to fetch.
     */
    where?: UnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidads to fetch.
     */
    orderBy?: UnidadOrderByWithRelationInput | UnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Unidads.
     */
    cursor?: UnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Unidads.
     */
    distinct?: UnidadScalarFieldEnum | UnidadScalarFieldEnum[]
  }

  /**
   * Unidad findMany
   */
  export type UnidadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
    /**
     * Filter, which Unidads to fetch.
     */
    where?: UnidadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Unidads to fetch.
     */
    orderBy?: UnidadOrderByWithRelationInput | UnidadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Unidads.
     */
    cursor?: UnidadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Unidads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Unidads.
     */
    skip?: number
    distinct?: UnidadScalarFieldEnum | UnidadScalarFieldEnum[]
  }

  /**
   * Unidad create
   */
  export type UnidadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
    /**
     * The data needed to create a Unidad.
     */
    data: XOR<UnidadCreateInput, UnidadUncheckedCreateInput>
  }

  /**
   * Unidad createMany
   */
  export type UnidadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Unidads.
     */
    data: UnidadCreateManyInput | UnidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unidad createManyAndReturn
   */
  export type UnidadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * The data used to create many Unidads.
     */
    data: UnidadCreateManyInput | UnidadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unidad update
   */
  export type UnidadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
    /**
     * The data needed to update a Unidad.
     */
    data: XOR<UnidadUpdateInput, UnidadUncheckedUpdateInput>
    /**
     * Choose, which Unidad to update.
     */
    where: UnidadWhereUniqueInput
  }

  /**
   * Unidad updateMany
   */
  export type UnidadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Unidads.
     */
    data: XOR<UnidadUpdateManyMutationInput, UnidadUncheckedUpdateManyInput>
    /**
     * Filter which Unidads to update
     */
    where?: UnidadWhereInput
    /**
     * Limit how many Unidads to update.
     */
    limit?: number
  }

  /**
   * Unidad updateManyAndReturn
   */
  export type UnidadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * The data used to update Unidads.
     */
    data: XOR<UnidadUpdateManyMutationInput, UnidadUncheckedUpdateManyInput>
    /**
     * Filter which Unidads to update
     */
    where?: UnidadWhereInput
    /**
     * Limit how many Unidads to update.
     */
    limit?: number
  }

  /**
   * Unidad upsert
   */
  export type UnidadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
    /**
     * The filter to search for the Unidad to update in case it exists.
     */
    where: UnidadWhereUniqueInput
    /**
     * In case the Unidad found by the `where` argument doesn't exist, create a new Unidad with this data.
     */
    create: XOR<UnidadCreateInput, UnidadUncheckedCreateInput>
    /**
     * In case the Unidad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnidadUpdateInput, UnidadUncheckedUpdateInput>
  }

  /**
   * Unidad delete
   */
  export type UnidadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
    /**
     * Filter which Unidad to delete.
     */
    where: UnidadWhereUniqueInput
  }

  /**
   * Unidad deleteMany
   */
  export type UnidadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unidads to delete
     */
    where?: UnidadWhereInput
    /**
     * Limit how many Unidads to delete.
     */
    limit?: number
  }

  /**
   * Unidad.parametros
   */
  export type Unidad$parametrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    where?: ParametroWhereInput
    orderBy?: ParametroOrderByWithRelationInput | ParametroOrderByWithRelationInput[]
    cursor?: ParametroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParametroScalarFieldEnum | ParametroScalarFieldEnum[]
  }

  /**
   * Unidad without action
   */
  export type UnidadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unidad
     */
    select?: UnidadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unidad
     */
    omit?: UnidadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadInclude<ExtArgs> | null
  }


  /**
   * Model Motor
   */

  export type AggregateMotor = {
    _count: MotorCountAggregateOutputType | null
    _avg: MotorAvgAggregateOutputType | null
    _sum: MotorSumAggregateOutputType | null
    _min: MotorMinAggregateOutputType | null
    _max: MotorMaxAggregateOutputType | null
  }

  export type MotorAvgAggregateOutputType = {
    id: number | null
    potencia: number | null
    velocidad: number | null
    intensidad: number | null
    rendimiento25: number | null
    rendimiento50: number | null
    rendimiento75: number | null
    rendimiento100: number | null
    rendimiento125: number | null
  }

  export type MotorSumAggregateOutputType = {
    id: number | null
    potencia: number | null
    velocidad: number | null
    intensidad: number | null
    rendimiento25: number | null
    rendimiento50: number | null
    rendimiento75: number | null
    rendimiento100: number | null
    rendimiento125: number | null
  }

  export type MotorMinAggregateOutputType = {
    id: number | null
    marca: string | null
    tipo: string | null
    potencia: number | null
    velocidad: number | null
    intensidad: number | null
    rendimiento25: number | null
    rendimiento50: number | null
    rendimiento75: number | null
    rendimiento100: number | null
    rendimiento125: number | null
    estado: boolean | null
  }

  export type MotorMaxAggregateOutputType = {
    id: number | null
    marca: string | null
    tipo: string | null
    potencia: number | null
    velocidad: number | null
    intensidad: number | null
    rendimiento25: number | null
    rendimiento50: number | null
    rendimiento75: number | null
    rendimiento100: number | null
    rendimiento125: number | null
    estado: boolean | null
  }

  export type MotorCountAggregateOutputType = {
    id: number
    marca: number
    tipo: number
    potencia: number
    velocidad: number
    intensidad: number
    rendimiento25: number
    rendimiento50: number
    rendimiento75: number
    rendimiento100: number
    rendimiento125: number
    estado: number
    _all: number
  }


  export type MotorAvgAggregateInputType = {
    id?: true
    potencia?: true
    velocidad?: true
    intensidad?: true
    rendimiento25?: true
    rendimiento50?: true
    rendimiento75?: true
    rendimiento100?: true
    rendimiento125?: true
  }

  export type MotorSumAggregateInputType = {
    id?: true
    potencia?: true
    velocidad?: true
    intensidad?: true
    rendimiento25?: true
    rendimiento50?: true
    rendimiento75?: true
    rendimiento100?: true
    rendimiento125?: true
  }

  export type MotorMinAggregateInputType = {
    id?: true
    marca?: true
    tipo?: true
    potencia?: true
    velocidad?: true
    intensidad?: true
    rendimiento25?: true
    rendimiento50?: true
    rendimiento75?: true
    rendimiento100?: true
    rendimiento125?: true
    estado?: true
  }

  export type MotorMaxAggregateInputType = {
    id?: true
    marca?: true
    tipo?: true
    potencia?: true
    velocidad?: true
    intensidad?: true
    rendimiento25?: true
    rendimiento50?: true
    rendimiento75?: true
    rendimiento100?: true
    rendimiento125?: true
    estado?: true
  }

  export type MotorCountAggregateInputType = {
    id?: true
    marca?: true
    tipo?: true
    potencia?: true
    velocidad?: true
    intensidad?: true
    rendimiento25?: true
    rendimiento50?: true
    rendimiento75?: true
    rendimiento100?: true
    rendimiento125?: true
    estado?: true
    _all?: true
  }

  export type MotorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motor to aggregate.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Motors
    **/
    _count?: true | MotorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MotorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MotorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MotorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MotorMaxAggregateInputType
  }

  export type GetMotorAggregateType<T extends MotorAggregateArgs> = {
        [P in keyof T & keyof AggregateMotor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMotor[P]>
      : GetScalarType<T[P], AggregateMotor[P]>
  }




  export type MotorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MotorWhereInput
    orderBy?: MotorOrderByWithAggregationInput | MotorOrderByWithAggregationInput[]
    by: MotorScalarFieldEnum[] | MotorScalarFieldEnum
    having?: MotorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MotorCountAggregateInputType | true
    _avg?: MotorAvgAggregateInputType
    _sum?: MotorSumAggregateInputType
    _min?: MotorMinAggregateInputType
    _max?: MotorMaxAggregateInputType
  }

  export type MotorGroupByOutputType = {
    id: number
    marca: string | null
    tipo: string | null
    potencia: number | null
    velocidad: number | null
    intensidad: number | null
    rendimiento25: number | null
    rendimiento50: number | null
    rendimiento75: number | null
    rendimiento100: number | null
    rendimiento125: number | null
    estado: boolean
    _count: MotorCountAggregateOutputType | null
    _avg: MotorAvgAggregateOutputType | null
    _sum: MotorSumAggregateOutputType | null
    _min: MotorMinAggregateOutputType | null
    _max: MotorMaxAggregateOutputType | null
  }

  type GetMotorGroupByPayload<T extends MotorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MotorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MotorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MotorGroupByOutputType[P]>
            : GetScalarType<T[P], MotorGroupByOutputType[P]>
        }
      >
    >


  export type MotorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    tipo?: boolean
    potencia?: boolean
    velocidad?: boolean
    intensidad?: boolean
    rendimiento25?: boolean
    rendimiento50?: boolean
    rendimiento75?: boolean
    rendimiento100?: boolean
    rendimiento125?: boolean
    estado?: boolean
    pruebas?: boolean | Motor$pruebasArgs<ExtArgs>
    _count?: boolean | MotorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    tipo?: boolean
    potencia?: boolean
    velocidad?: boolean
    intensidad?: boolean
    rendimiento25?: boolean
    rendimiento50?: boolean
    rendimiento75?: boolean
    rendimiento100?: boolean
    rendimiento125?: boolean
    estado?: boolean
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marca?: boolean
    tipo?: boolean
    potencia?: boolean
    velocidad?: boolean
    intensidad?: boolean
    rendimiento25?: boolean
    rendimiento50?: boolean
    rendimiento75?: boolean
    rendimiento100?: boolean
    rendimiento125?: boolean
    estado?: boolean
  }, ExtArgs["result"]["motor"]>

  export type MotorSelectScalar = {
    id?: boolean
    marca?: boolean
    tipo?: boolean
    potencia?: boolean
    velocidad?: boolean
    intensidad?: boolean
    rendimiento25?: boolean
    rendimiento50?: boolean
    rendimiento75?: boolean
    rendimiento100?: boolean
    rendimiento125?: boolean
    estado?: boolean
  }

  export type MotorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marca" | "tipo" | "potencia" | "velocidad" | "intensidad" | "rendimiento25" | "rendimiento50" | "rendimiento75" | "rendimiento100" | "rendimiento125" | "estado", ExtArgs["result"]["motor"]>
  export type MotorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | Motor$pruebasArgs<ExtArgs>
    _count?: boolean | MotorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MotorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MotorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MotorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Motor"
    objects: {
      pruebas: Prisma.$PruebaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marca: string | null
      tipo: string | null
      potencia: number | null
      velocidad: number | null
      intensidad: number | null
      rendimiento25: number | null
      rendimiento50: number | null
      rendimiento75: number | null
      rendimiento100: number | null
      rendimiento125: number | null
      estado: boolean
    }, ExtArgs["result"]["motor"]>
    composites: {}
  }

  type MotorGetPayload<S extends boolean | null | undefined | MotorDefaultArgs> = $Result.GetResult<Prisma.$MotorPayload, S>

  type MotorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MotorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MotorCountAggregateInputType | true
    }

  export interface MotorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Motor'], meta: { name: 'Motor' } }
    /**
     * Find zero or one Motor that matches the filter.
     * @param {MotorFindUniqueArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MotorFindUniqueArgs>(args: SelectSubset<T, MotorFindUniqueArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Motor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MotorFindUniqueOrThrowArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MotorFindUniqueOrThrowArgs>(args: SelectSubset<T, MotorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorFindFirstArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MotorFindFirstArgs>(args?: SelectSubset<T, MotorFindFirstArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Motor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorFindFirstOrThrowArgs} args - Arguments to find a Motor
     * @example
     * // Get one Motor
     * const motor = await prisma.motor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MotorFindFirstOrThrowArgs>(args?: SelectSubset<T, MotorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Motors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Motors
     * const motors = await prisma.motor.findMany()
     * 
     * // Get first 10 Motors
     * const motors = await prisma.motor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const motorWithIdOnly = await prisma.motor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MotorFindManyArgs>(args?: SelectSubset<T, MotorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Motor.
     * @param {MotorCreateArgs} args - Arguments to create a Motor.
     * @example
     * // Create one Motor
     * const Motor = await prisma.motor.create({
     *   data: {
     *     // ... data to create a Motor
     *   }
     * })
     * 
     */
    create<T extends MotorCreateArgs>(args: SelectSubset<T, MotorCreateArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Motors.
     * @param {MotorCreateManyArgs} args - Arguments to create many Motors.
     * @example
     * // Create many Motors
     * const motor = await prisma.motor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MotorCreateManyArgs>(args?: SelectSubset<T, MotorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Motors and returns the data saved in the database.
     * @param {MotorCreateManyAndReturnArgs} args - Arguments to create many Motors.
     * @example
     * // Create many Motors
     * const motor = await prisma.motor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Motors and only return the `id`
     * const motorWithIdOnly = await prisma.motor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MotorCreateManyAndReturnArgs>(args?: SelectSubset<T, MotorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Motor.
     * @param {MotorDeleteArgs} args - Arguments to delete one Motor.
     * @example
     * // Delete one Motor
     * const Motor = await prisma.motor.delete({
     *   where: {
     *     // ... filter to delete one Motor
     *   }
     * })
     * 
     */
    delete<T extends MotorDeleteArgs>(args: SelectSubset<T, MotorDeleteArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Motor.
     * @param {MotorUpdateArgs} args - Arguments to update one Motor.
     * @example
     * // Update one Motor
     * const motor = await prisma.motor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MotorUpdateArgs>(args: SelectSubset<T, MotorUpdateArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Motors.
     * @param {MotorDeleteManyArgs} args - Arguments to filter Motors to delete.
     * @example
     * // Delete a few Motors
     * const { count } = await prisma.motor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MotorDeleteManyArgs>(args?: SelectSubset<T, MotorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Motors
     * const motor = await prisma.motor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MotorUpdateManyArgs>(args: SelectSubset<T, MotorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Motors and returns the data updated in the database.
     * @param {MotorUpdateManyAndReturnArgs} args - Arguments to update many Motors.
     * @example
     * // Update many Motors
     * const motor = await prisma.motor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Motors and only return the `id`
     * const motorWithIdOnly = await prisma.motor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MotorUpdateManyAndReturnArgs>(args: SelectSubset<T, MotorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Motor.
     * @param {MotorUpsertArgs} args - Arguments to update or create a Motor.
     * @example
     * // Update or create a Motor
     * const motor = await prisma.motor.upsert({
     *   create: {
     *     // ... data to create a Motor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Motor we want to update
     *   }
     * })
     */
    upsert<T extends MotorUpsertArgs>(args: SelectSubset<T, MotorUpsertArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Motors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorCountArgs} args - Arguments to filter Motors to count.
     * @example
     * // Count the number of Motors
     * const count = await prisma.motor.count({
     *   where: {
     *     // ... the filter for the Motors we want to count
     *   }
     * })
    **/
    count<T extends MotorCountArgs>(
      args?: Subset<T, MotorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MotorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Motor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MotorAggregateArgs>(args: Subset<T, MotorAggregateArgs>): Prisma.PrismaPromise<GetMotorAggregateType<T>>

    /**
     * Group by Motor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MotorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MotorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MotorGroupByArgs['orderBy'] }
        : { orderBy?: MotorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MotorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMotorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Motor model
   */
  readonly fields: MotorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Motor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MotorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pruebas<T extends Motor$pruebasArgs<ExtArgs> = {}>(args?: Subset<T, Motor$pruebasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Motor model
   */
  interface MotorFieldRefs {
    readonly id: FieldRef<"Motor", 'Int'>
    readonly marca: FieldRef<"Motor", 'String'>
    readonly tipo: FieldRef<"Motor", 'String'>
    readonly potencia: FieldRef<"Motor", 'Float'>
    readonly velocidad: FieldRef<"Motor", 'Float'>
    readonly intensidad: FieldRef<"Motor", 'Float'>
    readonly rendimiento25: FieldRef<"Motor", 'Float'>
    readonly rendimiento50: FieldRef<"Motor", 'Float'>
    readonly rendimiento75: FieldRef<"Motor", 'Float'>
    readonly rendimiento100: FieldRef<"Motor", 'Float'>
    readonly rendimiento125: FieldRef<"Motor", 'Float'>
    readonly estado: FieldRef<"Motor", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Motor findUnique
   */
  export type MotorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor findUniqueOrThrow
   */
  export type MotorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor findFirst
   */
  export type MotorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motors.
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motors.
     */
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Motor findFirstOrThrow
   */
  export type MotorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motor to fetch.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Motors.
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Motors.
     */
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Motor findMany
   */
  export type MotorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter, which Motors to fetch.
     */
    where?: MotorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Motors to fetch.
     */
    orderBy?: MotorOrderByWithRelationInput | MotorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Motors.
     */
    cursor?: MotorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Motors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Motors.
     */
    skip?: number
    distinct?: MotorScalarFieldEnum | MotorScalarFieldEnum[]
  }

  /**
   * Motor create
   */
  export type MotorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * The data needed to create a Motor.
     */
    data?: XOR<MotorCreateInput, MotorUncheckedCreateInput>
  }

  /**
   * Motor createMany
   */
  export type MotorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Motors.
     */
    data: MotorCreateManyInput | MotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motor createManyAndReturn
   */
  export type MotorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * The data used to create many Motors.
     */
    data: MotorCreateManyInput | MotorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Motor update
   */
  export type MotorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * The data needed to update a Motor.
     */
    data: XOR<MotorUpdateInput, MotorUncheckedUpdateInput>
    /**
     * Choose, which Motor to update.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor updateMany
   */
  export type MotorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Motors.
     */
    data: XOR<MotorUpdateManyMutationInput, MotorUncheckedUpdateManyInput>
    /**
     * Filter which Motors to update
     */
    where?: MotorWhereInput
    /**
     * Limit how many Motors to update.
     */
    limit?: number
  }

  /**
   * Motor updateManyAndReturn
   */
  export type MotorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * The data used to update Motors.
     */
    data: XOR<MotorUpdateManyMutationInput, MotorUncheckedUpdateManyInput>
    /**
     * Filter which Motors to update
     */
    where?: MotorWhereInput
    /**
     * Limit how many Motors to update.
     */
    limit?: number
  }

  /**
   * Motor upsert
   */
  export type MotorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * The filter to search for the Motor to update in case it exists.
     */
    where: MotorWhereUniqueInput
    /**
     * In case the Motor found by the `where` argument doesn't exist, create a new Motor with this data.
     */
    create: XOR<MotorCreateInput, MotorUncheckedCreateInput>
    /**
     * In case the Motor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MotorUpdateInput, MotorUncheckedUpdateInput>
  }

  /**
   * Motor delete
   */
  export type MotorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
    /**
     * Filter which Motor to delete.
     */
    where: MotorWhereUniqueInput
  }

  /**
   * Motor deleteMany
   */
  export type MotorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Motors to delete
     */
    where?: MotorWhereInput
    /**
     * Limit how many Motors to delete.
     */
    limit?: number
  }

  /**
   * Motor.pruebas
   */
  export type Motor$pruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    where?: PruebaWhereInput
    orderBy?: PruebaOrderByWithRelationInput | PruebaOrderByWithRelationInput[]
    cursor?: PruebaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PruebaScalarFieldEnum | PruebaScalarFieldEnum[]
  }

  /**
   * Motor without action
   */
  export type MotorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Motor
     */
    select?: MotorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Motor
     */
    omit?: MotorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MotorInclude<ExtArgs> | null
  }


  /**
   * Model Detalles
   */

  export type AggregateDetalles = {
    _count: DetallesCountAggregateOutputType | null
    _avg: DetallesAvgAggregateOutputType | null
    _sum: DetallesSumAggregateOutputType | null
    _min: DetallesMinAggregateOutputType | null
    _max: DetallesMaxAggregateOutputType | null
  }

  export type DetallesAvgAggregateOutputType = {
    id: number | null
    correccionManometrica: number | null
    presionAtmosferica: number | null
    temperaturaAgua: number | null
    temperaturaAmbiente: number | null
    temperaturaLadoAcoplamiento: number | null
    temperaturaLadoBomba: number | null
    tiempoFuncionamientoBomba: number | null
  }

  export type DetallesSumAggregateOutputType = {
    id: number | null
    correccionManometrica: number | null
    presionAtmosferica: number | null
    temperaturaAgua: number | null
    temperaturaAmbiente: number | null
    temperaturaLadoAcoplamiento: number | null
    temperaturaLadoBomba: number | null
    tiempoFuncionamientoBomba: number | null
  }

  export type DetallesMinAggregateOutputType = {
    id: number | null
    esBombaVertical: boolean | null
    comentario: string | null
    correccionManometrica: number | null
    presionAtmosferica: number | null
    temperaturaAgua: number | null
    temperaturaAmbiente: number | null
    temperaturaLadoAcoplamiento: number | null
    temperaturaLadoBomba: number | null
    tiempoFuncionamientoBomba: number | null
  }

  export type DetallesMaxAggregateOutputType = {
    id: number | null
    esBombaVertical: boolean | null
    comentario: string | null
    correccionManometrica: number | null
    presionAtmosferica: number | null
    temperaturaAgua: number | null
    temperaturaAmbiente: number | null
    temperaturaLadoAcoplamiento: number | null
    temperaturaLadoBomba: number | null
    tiempoFuncionamientoBomba: number | null
  }

  export type DetallesCountAggregateOutputType = {
    id: number
    esBombaVertical: number
    comentario: number
    correccionManometrica: number
    presionAtmosferica: number
    temperaturaAgua: number
    temperaturaAmbiente: number
    temperaturaLadoAcoplamiento: number
    temperaturaLadoBomba: number
    tiempoFuncionamientoBomba: number
    _all: number
  }


  export type DetallesAvgAggregateInputType = {
    id?: true
    correccionManometrica?: true
    presionAtmosferica?: true
    temperaturaAgua?: true
    temperaturaAmbiente?: true
    temperaturaLadoAcoplamiento?: true
    temperaturaLadoBomba?: true
    tiempoFuncionamientoBomba?: true
  }

  export type DetallesSumAggregateInputType = {
    id?: true
    correccionManometrica?: true
    presionAtmosferica?: true
    temperaturaAgua?: true
    temperaturaAmbiente?: true
    temperaturaLadoAcoplamiento?: true
    temperaturaLadoBomba?: true
    tiempoFuncionamientoBomba?: true
  }

  export type DetallesMinAggregateInputType = {
    id?: true
    esBombaVertical?: true
    comentario?: true
    correccionManometrica?: true
    presionAtmosferica?: true
    temperaturaAgua?: true
    temperaturaAmbiente?: true
    temperaturaLadoAcoplamiento?: true
    temperaturaLadoBomba?: true
    tiempoFuncionamientoBomba?: true
  }

  export type DetallesMaxAggregateInputType = {
    id?: true
    esBombaVertical?: true
    comentario?: true
    correccionManometrica?: true
    presionAtmosferica?: true
    temperaturaAgua?: true
    temperaturaAmbiente?: true
    temperaturaLadoAcoplamiento?: true
    temperaturaLadoBomba?: true
    tiempoFuncionamientoBomba?: true
  }

  export type DetallesCountAggregateInputType = {
    id?: true
    esBombaVertical?: true
    comentario?: true
    correccionManometrica?: true
    presionAtmosferica?: true
    temperaturaAgua?: true
    temperaturaAmbiente?: true
    temperaturaLadoAcoplamiento?: true
    temperaturaLadoBomba?: true
    tiempoFuncionamientoBomba?: true
    _all?: true
  }

  export type DetallesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalles to aggregate.
     */
    where?: DetallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetallesOrderByWithRelationInput | DetallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DetallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Detalles
    **/
    _count?: true | DetallesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetallesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetallesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetallesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetallesMaxAggregateInputType
  }

  export type GetDetallesAggregateType<T extends DetallesAggregateArgs> = {
        [P in keyof T & keyof AggregateDetalles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetalles[P]>
      : GetScalarType<T[P], AggregateDetalles[P]>
  }




  export type DetallesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DetallesWhereInput
    orderBy?: DetallesOrderByWithAggregationInput | DetallesOrderByWithAggregationInput[]
    by: DetallesScalarFieldEnum[] | DetallesScalarFieldEnum
    having?: DetallesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetallesCountAggregateInputType | true
    _avg?: DetallesAvgAggregateInputType
    _sum?: DetallesSumAggregateInputType
    _min?: DetallesMinAggregateInputType
    _max?: DetallesMaxAggregateInputType
  }

  export type DetallesGroupByOutputType = {
    id: number
    esBombaVertical: boolean
    comentario: string | null
    correccionManometrica: number | null
    presionAtmosferica: number | null
    temperaturaAgua: number | null
    temperaturaAmbiente: number | null
    temperaturaLadoAcoplamiento: number | null
    temperaturaLadoBomba: number | null
    tiempoFuncionamientoBomba: number | null
    _count: DetallesCountAggregateOutputType | null
    _avg: DetallesAvgAggregateOutputType | null
    _sum: DetallesSumAggregateOutputType | null
    _min: DetallesMinAggregateOutputType | null
    _max: DetallesMaxAggregateOutputType | null
  }

  type GetDetallesGroupByPayload<T extends DetallesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DetallesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DetallesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DetallesGroupByOutputType[P]>
            : GetScalarType<T[P], DetallesGroupByOutputType[P]>
        }
      >
    >


  export type DetallesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    esBombaVertical?: boolean
    comentario?: boolean
    correccionManometrica?: boolean
    presionAtmosferica?: boolean
    temperaturaAgua?: boolean
    temperaturaAmbiente?: boolean
    temperaturaLadoAcoplamiento?: boolean
    temperaturaLadoBomba?: boolean
    tiempoFuncionamientoBomba?: boolean
    pruebas?: boolean | Detalles$pruebasArgs<ExtArgs>
    _count?: boolean | DetallesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["detalles"]>

  export type DetallesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    esBombaVertical?: boolean
    comentario?: boolean
    correccionManometrica?: boolean
    presionAtmosferica?: boolean
    temperaturaAgua?: boolean
    temperaturaAmbiente?: boolean
    temperaturaLadoAcoplamiento?: boolean
    temperaturaLadoBomba?: boolean
    tiempoFuncionamientoBomba?: boolean
  }, ExtArgs["result"]["detalles"]>

  export type DetallesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    esBombaVertical?: boolean
    comentario?: boolean
    correccionManometrica?: boolean
    presionAtmosferica?: boolean
    temperaturaAgua?: boolean
    temperaturaAmbiente?: boolean
    temperaturaLadoAcoplamiento?: boolean
    temperaturaLadoBomba?: boolean
    tiempoFuncionamientoBomba?: boolean
  }, ExtArgs["result"]["detalles"]>

  export type DetallesSelectScalar = {
    id?: boolean
    esBombaVertical?: boolean
    comentario?: boolean
    correccionManometrica?: boolean
    presionAtmosferica?: boolean
    temperaturaAgua?: boolean
    temperaturaAmbiente?: boolean
    temperaturaLadoAcoplamiento?: boolean
    temperaturaLadoBomba?: boolean
    tiempoFuncionamientoBomba?: boolean
  }

  export type DetallesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "esBombaVertical" | "comentario" | "correccionManometrica" | "presionAtmosferica" | "temperaturaAgua" | "temperaturaAmbiente" | "temperaturaLadoAcoplamiento" | "temperaturaLadoBomba" | "tiempoFuncionamientoBomba", ExtArgs["result"]["detalles"]>
  export type DetallesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | Detalles$pruebasArgs<ExtArgs>
    _count?: boolean | DetallesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DetallesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DetallesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DetallesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Detalles"
    objects: {
      pruebas: Prisma.$PruebaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      esBombaVertical: boolean
      comentario: string | null
      correccionManometrica: number | null
      presionAtmosferica: number | null
      temperaturaAgua: number | null
      temperaturaAmbiente: number | null
      temperaturaLadoAcoplamiento: number | null
      temperaturaLadoBomba: number | null
      tiempoFuncionamientoBomba: number | null
    }, ExtArgs["result"]["detalles"]>
    composites: {}
  }

  type DetallesGetPayload<S extends boolean | null | undefined | DetallesDefaultArgs> = $Result.GetResult<Prisma.$DetallesPayload, S>

  type DetallesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DetallesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DetallesCountAggregateInputType | true
    }

  export interface DetallesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Detalles'], meta: { name: 'Detalles' } }
    /**
     * Find zero or one Detalles that matches the filter.
     * @param {DetallesFindUniqueArgs} args - Arguments to find a Detalles
     * @example
     * // Get one Detalles
     * const detalles = await prisma.detalles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DetallesFindUniqueArgs>(args: SelectSubset<T, DetallesFindUniqueArgs<ExtArgs>>): Prisma__DetallesClient<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Detalles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DetallesFindUniqueOrThrowArgs} args - Arguments to find a Detalles
     * @example
     * // Get one Detalles
     * const detalles = await prisma.detalles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DetallesFindUniqueOrThrowArgs>(args: SelectSubset<T, DetallesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DetallesClient<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesFindFirstArgs} args - Arguments to find a Detalles
     * @example
     * // Get one Detalles
     * const detalles = await prisma.detalles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DetallesFindFirstArgs>(args?: SelectSubset<T, DetallesFindFirstArgs<ExtArgs>>): Prisma__DetallesClient<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Detalles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesFindFirstOrThrowArgs} args - Arguments to find a Detalles
     * @example
     * // Get one Detalles
     * const detalles = await prisma.detalles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DetallesFindFirstOrThrowArgs>(args?: SelectSubset<T, DetallesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DetallesClient<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Detalles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Detalles
     * const detalles = await prisma.detalles.findMany()
     * 
     * // Get first 10 Detalles
     * const detalles = await prisma.detalles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detallesWithIdOnly = await prisma.detalles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DetallesFindManyArgs>(args?: SelectSubset<T, DetallesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Detalles.
     * @param {DetallesCreateArgs} args - Arguments to create a Detalles.
     * @example
     * // Create one Detalles
     * const Detalles = await prisma.detalles.create({
     *   data: {
     *     // ... data to create a Detalles
     *   }
     * })
     * 
     */
    create<T extends DetallesCreateArgs>(args: SelectSubset<T, DetallesCreateArgs<ExtArgs>>): Prisma__DetallesClient<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Detalles.
     * @param {DetallesCreateManyArgs} args - Arguments to create many Detalles.
     * @example
     * // Create many Detalles
     * const detalles = await prisma.detalles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DetallesCreateManyArgs>(args?: SelectSubset<T, DetallesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Detalles and returns the data saved in the database.
     * @param {DetallesCreateManyAndReturnArgs} args - Arguments to create many Detalles.
     * @example
     * // Create many Detalles
     * const detalles = await prisma.detalles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Detalles and only return the `id`
     * const detallesWithIdOnly = await prisma.detalles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DetallesCreateManyAndReturnArgs>(args?: SelectSubset<T, DetallesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Detalles.
     * @param {DetallesDeleteArgs} args - Arguments to delete one Detalles.
     * @example
     * // Delete one Detalles
     * const Detalles = await prisma.detalles.delete({
     *   where: {
     *     // ... filter to delete one Detalles
     *   }
     * })
     * 
     */
    delete<T extends DetallesDeleteArgs>(args: SelectSubset<T, DetallesDeleteArgs<ExtArgs>>): Prisma__DetallesClient<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Detalles.
     * @param {DetallesUpdateArgs} args - Arguments to update one Detalles.
     * @example
     * // Update one Detalles
     * const detalles = await prisma.detalles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DetallesUpdateArgs>(args: SelectSubset<T, DetallesUpdateArgs<ExtArgs>>): Prisma__DetallesClient<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Detalles.
     * @param {DetallesDeleteManyArgs} args - Arguments to filter Detalles to delete.
     * @example
     * // Delete a few Detalles
     * const { count } = await prisma.detalles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DetallesDeleteManyArgs>(args?: SelectSubset<T, DetallesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Detalles
     * const detalles = await prisma.detalles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DetallesUpdateManyArgs>(args: SelectSubset<T, DetallesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Detalles and returns the data updated in the database.
     * @param {DetallesUpdateManyAndReturnArgs} args - Arguments to update many Detalles.
     * @example
     * // Update many Detalles
     * const detalles = await prisma.detalles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Detalles and only return the `id`
     * const detallesWithIdOnly = await prisma.detalles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DetallesUpdateManyAndReturnArgs>(args: SelectSubset<T, DetallesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Detalles.
     * @param {DetallesUpsertArgs} args - Arguments to update or create a Detalles.
     * @example
     * // Update or create a Detalles
     * const detalles = await prisma.detalles.upsert({
     *   create: {
     *     // ... data to create a Detalles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Detalles we want to update
     *   }
     * })
     */
    upsert<T extends DetallesUpsertArgs>(args: SelectSubset<T, DetallesUpsertArgs<ExtArgs>>): Prisma__DetallesClient<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesCountArgs} args - Arguments to filter Detalles to count.
     * @example
     * // Count the number of Detalles
     * const count = await prisma.detalles.count({
     *   where: {
     *     // ... the filter for the Detalles we want to count
     *   }
     * })
    **/
    count<T extends DetallesCountArgs>(
      args?: Subset<T, DetallesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetallesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DetallesAggregateArgs>(args: Subset<T, DetallesAggregateArgs>): Prisma.PrismaPromise<GetDetallesAggregateType<T>>

    /**
     * Group by Detalles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetallesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DetallesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetallesGroupByArgs['orderBy'] }
        : { orderBy?: DetallesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DetallesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetallesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Detalles model
   */
  readonly fields: DetallesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Detalles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DetallesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pruebas<T extends Detalles$pruebasArgs<ExtArgs> = {}>(args?: Subset<T, Detalles$pruebasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Detalles model
   */
  interface DetallesFieldRefs {
    readonly id: FieldRef<"Detalles", 'Int'>
    readonly esBombaVertical: FieldRef<"Detalles", 'Boolean'>
    readonly comentario: FieldRef<"Detalles", 'String'>
    readonly correccionManometrica: FieldRef<"Detalles", 'Float'>
    readonly presionAtmosferica: FieldRef<"Detalles", 'Float'>
    readonly temperaturaAgua: FieldRef<"Detalles", 'Float'>
    readonly temperaturaAmbiente: FieldRef<"Detalles", 'Float'>
    readonly temperaturaLadoAcoplamiento: FieldRef<"Detalles", 'Float'>
    readonly temperaturaLadoBomba: FieldRef<"Detalles", 'Float'>
    readonly tiempoFuncionamientoBomba: FieldRef<"Detalles", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Detalles findUnique
   */
  export type DetallesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
    /**
     * Filter, which Detalles to fetch.
     */
    where: DetallesWhereUniqueInput
  }

  /**
   * Detalles findUniqueOrThrow
   */
  export type DetallesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
    /**
     * Filter, which Detalles to fetch.
     */
    where: DetallesWhereUniqueInput
  }

  /**
   * Detalles findFirst
   */
  export type DetallesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
    /**
     * Filter, which Detalles to fetch.
     */
    where?: DetallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetallesOrderByWithRelationInput | DetallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalles.
     */
    cursor?: DetallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalles.
     */
    distinct?: DetallesScalarFieldEnum | DetallesScalarFieldEnum[]
  }

  /**
   * Detalles findFirstOrThrow
   */
  export type DetallesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
    /**
     * Filter, which Detalles to fetch.
     */
    where?: DetallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetallesOrderByWithRelationInput | DetallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Detalles.
     */
    cursor?: DetallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Detalles.
     */
    distinct?: DetallesScalarFieldEnum | DetallesScalarFieldEnum[]
  }

  /**
   * Detalles findMany
   */
  export type DetallesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
    /**
     * Filter, which Detalles to fetch.
     */
    where?: DetallesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Detalles to fetch.
     */
    orderBy?: DetallesOrderByWithRelationInput | DetallesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Detalles.
     */
    cursor?: DetallesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Detalles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Detalles.
     */
    skip?: number
    distinct?: DetallesScalarFieldEnum | DetallesScalarFieldEnum[]
  }

  /**
   * Detalles create
   */
  export type DetallesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
    /**
     * The data needed to create a Detalles.
     */
    data?: XOR<DetallesCreateInput, DetallesUncheckedCreateInput>
  }

  /**
   * Detalles createMany
   */
  export type DetallesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Detalles.
     */
    data: DetallesCreateManyInput | DetallesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detalles createManyAndReturn
   */
  export type DetallesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * The data used to create many Detalles.
     */
    data: DetallesCreateManyInput | DetallesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Detalles update
   */
  export type DetallesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
    /**
     * The data needed to update a Detalles.
     */
    data: XOR<DetallesUpdateInput, DetallesUncheckedUpdateInput>
    /**
     * Choose, which Detalles to update.
     */
    where: DetallesWhereUniqueInput
  }

  /**
   * Detalles updateMany
   */
  export type DetallesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Detalles.
     */
    data: XOR<DetallesUpdateManyMutationInput, DetallesUncheckedUpdateManyInput>
    /**
     * Filter which Detalles to update
     */
    where?: DetallesWhereInput
    /**
     * Limit how many Detalles to update.
     */
    limit?: number
  }

  /**
   * Detalles updateManyAndReturn
   */
  export type DetallesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * The data used to update Detalles.
     */
    data: XOR<DetallesUpdateManyMutationInput, DetallesUncheckedUpdateManyInput>
    /**
     * Filter which Detalles to update
     */
    where?: DetallesWhereInput
    /**
     * Limit how many Detalles to update.
     */
    limit?: number
  }

  /**
   * Detalles upsert
   */
  export type DetallesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
    /**
     * The filter to search for the Detalles to update in case it exists.
     */
    where: DetallesWhereUniqueInput
    /**
     * In case the Detalles found by the `where` argument doesn't exist, create a new Detalles with this data.
     */
    create: XOR<DetallesCreateInput, DetallesUncheckedCreateInput>
    /**
     * In case the Detalles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DetallesUpdateInput, DetallesUncheckedUpdateInput>
  }

  /**
   * Detalles delete
   */
  export type DetallesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
    /**
     * Filter which Detalles to delete.
     */
    where: DetallesWhereUniqueInput
  }

  /**
   * Detalles deleteMany
   */
  export type DetallesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Detalles to delete
     */
    where?: DetallesWhereInput
    /**
     * Limit how many Detalles to delete.
     */
    limit?: number
  }

  /**
   * Detalles.pruebas
   */
  export type Detalles$pruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    where?: PruebaWhereInput
    orderBy?: PruebaOrderByWithRelationInput | PruebaOrderByWithRelationInput[]
    cursor?: PruebaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PruebaScalarFieldEnum | PruebaScalarFieldEnum[]
  }

  /**
   * Detalles without action
   */
  export type DetallesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Detalles
     */
    select?: DetallesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Detalles
     */
    omit?: DetallesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DetallesInclude<ExtArgs> | null
  }


  /**
   * Model Banco
   */

  export type AggregateBanco = {
    _count: BancoCountAggregateOutputType | null
    _avg: BancoAvgAggregateOutputType | null
    _sum: BancoSumAggregateOutputType | null
    _min: BancoMinAggregateOutputType | null
    _max: BancoMaxAggregateOutputType | null
  }

  export type BancoAvgAggregateOutputType = {
    id: number | null
  }

  export type BancoSumAggregateOutputType = {
    id: number | null
  }

  export type BancoMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    estado: boolean | null
  }

  export type BancoMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    estado: boolean | null
  }

  export type BancoCountAggregateOutputType = {
    id: number
    nombre: number
    estado: number
    _all: number
  }


  export type BancoAvgAggregateInputType = {
    id?: true
  }

  export type BancoSumAggregateInputType = {
    id?: true
  }

  export type BancoMinAggregateInputType = {
    id?: true
    nombre?: true
    estado?: true
  }

  export type BancoMaxAggregateInputType = {
    id?: true
    nombre?: true
    estado?: true
  }

  export type BancoCountAggregateInputType = {
    id?: true
    nombre?: true
    estado?: true
    _all?: true
  }

  export type BancoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banco to aggregate.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bancos
    **/
    _count?: true | BancoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BancoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BancoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BancoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BancoMaxAggregateInputType
  }

  export type GetBancoAggregateType<T extends BancoAggregateArgs> = {
        [P in keyof T & keyof AggregateBanco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanco[P]>
      : GetScalarType<T[P], AggregateBanco[P]>
  }




  export type BancoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BancoWhereInput
    orderBy?: BancoOrderByWithAggregationInput | BancoOrderByWithAggregationInput[]
    by: BancoScalarFieldEnum[] | BancoScalarFieldEnum
    having?: BancoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BancoCountAggregateInputType | true
    _avg?: BancoAvgAggregateInputType
    _sum?: BancoSumAggregateInputType
    _min?: BancoMinAggregateInputType
    _max?: BancoMaxAggregateInputType
  }

  export type BancoGroupByOutputType = {
    id: number
    nombre: string
    estado: boolean
    _count: BancoCountAggregateOutputType | null
    _avg: BancoAvgAggregateOutputType | null
    _sum: BancoSumAggregateOutputType | null
    _min: BancoMinAggregateOutputType | null
    _max: BancoMaxAggregateOutputType | null
  }

  type GetBancoGroupByPayload<T extends BancoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BancoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BancoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BancoGroupByOutputType[P]>
            : GetScalarType<T[P], BancoGroupByOutputType[P]>
        }
      >
    >


  export type BancoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estado?: boolean
    pruebas?: boolean | Banco$pruebasArgs<ExtArgs>
    _count?: boolean | BancoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banco"]>

  export type BancoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estado?: boolean
  }, ExtArgs["result"]["banco"]>

  export type BancoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    estado?: boolean
  }, ExtArgs["result"]["banco"]>

  export type BancoSelectScalar = {
    id?: boolean
    nombre?: boolean
    estado?: boolean
  }

  export type BancoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "estado", ExtArgs["result"]["banco"]>
  export type BancoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | Banco$pruebasArgs<ExtArgs>
    _count?: boolean | BancoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BancoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BancoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BancoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banco"
    objects: {
      pruebas: Prisma.$PruebaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      estado: boolean
    }, ExtArgs["result"]["banco"]>
    composites: {}
  }

  type BancoGetPayload<S extends boolean | null | undefined | BancoDefaultArgs> = $Result.GetResult<Prisma.$BancoPayload, S>

  type BancoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BancoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BancoCountAggregateInputType | true
    }

  export interface BancoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banco'], meta: { name: 'Banco' } }
    /**
     * Find zero or one Banco that matches the filter.
     * @param {BancoFindUniqueArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BancoFindUniqueArgs>(args: SelectSubset<T, BancoFindUniqueArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BancoFindUniqueOrThrowArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BancoFindUniqueOrThrowArgs>(args: SelectSubset<T, BancoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoFindFirstArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BancoFindFirstArgs>(args?: SelectSubset<T, BancoFindFirstArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoFindFirstOrThrowArgs} args - Arguments to find a Banco
     * @example
     * // Get one Banco
     * const banco = await prisma.banco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BancoFindFirstOrThrowArgs>(args?: SelectSubset<T, BancoFindFirstOrThrowArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bancos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bancos
     * const bancos = await prisma.banco.findMany()
     * 
     * // Get first 10 Bancos
     * const bancos = await prisma.banco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bancoWithIdOnly = await prisma.banco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BancoFindManyArgs>(args?: SelectSubset<T, BancoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banco.
     * @param {BancoCreateArgs} args - Arguments to create a Banco.
     * @example
     * // Create one Banco
     * const Banco = await prisma.banco.create({
     *   data: {
     *     // ... data to create a Banco
     *   }
     * })
     * 
     */
    create<T extends BancoCreateArgs>(args: SelectSubset<T, BancoCreateArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bancos.
     * @param {BancoCreateManyArgs} args - Arguments to create many Bancos.
     * @example
     * // Create many Bancos
     * const banco = await prisma.banco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BancoCreateManyArgs>(args?: SelectSubset<T, BancoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bancos and returns the data saved in the database.
     * @param {BancoCreateManyAndReturnArgs} args - Arguments to create many Bancos.
     * @example
     * // Create many Bancos
     * const banco = await prisma.banco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bancos and only return the `id`
     * const bancoWithIdOnly = await prisma.banco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BancoCreateManyAndReturnArgs>(args?: SelectSubset<T, BancoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banco.
     * @param {BancoDeleteArgs} args - Arguments to delete one Banco.
     * @example
     * // Delete one Banco
     * const Banco = await prisma.banco.delete({
     *   where: {
     *     // ... filter to delete one Banco
     *   }
     * })
     * 
     */
    delete<T extends BancoDeleteArgs>(args: SelectSubset<T, BancoDeleteArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banco.
     * @param {BancoUpdateArgs} args - Arguments to update one Banco.
     * @example
     * // Update one Banco
     * const banco = await prisma.banco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BancoUpdateArgs>(args: SelectSubset<T, BancoUpdateArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bancos.
     * @param {BancoDeleteManyArgs} args - Arguments to filter Bancos to delete.
     * @example
     * // Delete a few Bancos
     * const { count } = await prisma.banco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BancoDeleteManyArgs>(args?: SelectSubset<T, BancoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bancos
     * const banco = await prisma.banco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BancoUpdateManyArgs>(args: SelectSubset<T, BancoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bancos and returns the data updated in the database.
     * @param {BancoUpdateManyAndReturnArgs} args - Arguments to update many Bancos.
     * @example
     * // Update many Bancos
     * const banco = await prisma.banco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bancos and only return the `id`
     * const bancoWithIdOnly = await prisma.banco.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BancoUpdateManyAndReturnArgs>(args: SelectSubset<T, BancoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banco.
     * @param {BancoUpsertArgs} args - Arguments to update or create a Banco.
     * @example
     * // Update or create a Banco
     * const banco = await prisma.banco.upsert({
     *   create: {
     *     // ... data to create a Banco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banco we want to update
     *   }
     * })
     */
    upsert<T extends BancoUpsertArgs>(args: SelectSubset<T, BancoUpsertArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bancos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoCountArgs} args - Arguments to filter Bancos to count.
     * @example
     * // Count the number of Bancos
     * const count = await prisma.banco.count({
     *   where: {
     *     // ... the filter for the Bancos we want to count
     *   }
     * })
    **/
    count<T extends BancoCountArgs>(
      args?: Subset<T, BancoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BancoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BancoAggregateArgs>(args: Subset<T, BancoAggregateArgs>): Prisma.PrismaPromise<GetBancoAggregateType<T>>

    /**
     * Group by Banco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BancoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BancoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BancoGroupByArgs['orderBy'] }
        : { orderBy?: BancoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BancoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBancoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banco model
   */
  readonly fields: BancoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BancoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pruebas<T extends Banco$pruebasArgs<ExtArgs> = {}>(args?: Subset<T, Banco$pruebasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Banco model
   */
  interface BancoFieldRefs {
    readonly id: FieldRef<"Banco", 'Int'>
    readonly nombre: FieldRef<"Banco", 'String'>
    readonly estado: FieldRef<"Banco", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Banco findUnique
   */
  export type BancoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco findUniqueOrThrow
   */
  export type BancoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco findFirst
   */
  export type BancoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bancos.
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bancos.
     */
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Banco findFirstOrThrow
   */
  export type BancoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Banco to fetch.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bancos.
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bancos.
     */
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Banco findMany
   */
  export type BancoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter, which Bancos to fetch.
     */
    where?: BancoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bancos to fetch.
     */
    orderBy?: BancoOrderByWithRelationInput | BancoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bancos.
     */
    cursor?: BancoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bancos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bancos.
     */
    skip?: number
    distinct?: BancoScalarFieldEnum | BancoScalarFieldEnum[]
  }

  /**
   * Banco create
   */
  export type BancoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * The data needed to create a Banco.
     */
    data: XOR<BancoCreateInput, BancoUncheckedCreateInput>
  }

  /**
   * Banco createMany
   */
  export type BancoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bancos.
     */
    data: BancoCreateManyInput | BancoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banco createManyAndReturn
   */
  export type BancoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * The data used to create many Bancos.
     */
    data: BancoCreateManyInput | BancoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banco update
   */
  export type BancoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * The data needed to update a Banco.
     */
    data: XOR<BancoUpdateInput, BancoUncheckedUpdateInput>
    /**
     * Choose, which Banco to update.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco updateMany
   */
  export type BancoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bancos.
     */
    data: XOR<BancoUpdateManyMutationInput, BancoUncheckedUpdateManyInput>
    /**
     * Filter which Bancos to update
     */
    where?: BancoWhereInput
    /**
     * Limit how many Bancos to update.
     */
    limit?: number
  }

  /**
   * Banco updateManyAndReturn
   */
  export type BancoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * The data used to update Bancos.
     */
    data: XOR<BancoUpdateManyMutationInput, BancoUncheckedUpdateManyInput>
    /**
     * Filter which Bancos to update
     */
    where?: BancoWhereInput
    /**
     * Limit how many Bancos to update.
     */
    limit?: number
  }

  /**
   * Banco upsert
   */
  export type BancoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * The filter to search for the Banco to update in case it exists.
     */
    where: BancoWhereUniqueInput
    /**
     * In case the Banco found by the `where` argument doesn't exist, create a new Banco with this data.
     */
    create: XOR<BancoCreateInput, BancoUncheckedCreateInput>
    /**
     * In case the Banco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BancoUpdateInput, BancoUncheckedUpdateInput>
  }

  /**
   * Banco delete
   */
  export type BancoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
    /**
     * Filter which Banco to delete.
     */
    where: BancoWhereUniqueInput
  }

  /**
   * Banco deleteMany
   */
  export type BancoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bancos to delete
     */
    where?: BancoWhereInput
    /**
     * Limit how many Bancos to delete.
     */
    limit?: number
  }

  /**
   * Banco.pruebas
   */
  export type Banco$pruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    where?: PruebaWhereInput
    orderBy?: PruebaOrderByWithRelationInput | PruebaOrderByWithRelationInput[]
    cursor?: PruebaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PruebaScalarFieldEnum | PruebaScalarFieldEnum[]
  }

  /**
   * Banco without action
   */
  export type BancoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banco
     */
    select?: BancoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banco
     */
    omit?: BancoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BancoInclude<ExtArgs> | null
  }


  /**
   * Model Bomba
   */

  export type AggregateBomba = {
    _count: BombaCountAggregateOutputType | null
    _avg: BombaAvgAggregateOutputType | null
    _sum: BombaSumAggregateOutputType | null
    _min: BombaMinAggregateOutputType | null
    _max: BombaMaxAggregateOutputType | null
  }

  export type BombaAvgAggregateOutputType = {
    id: number | null
    diametroAspiracion: number | null
    diametroImpulsion: number | null
  }

  export type BombaSumAggregateOutputType = {
    id: number | null
    diametroAspiracion: number | null
    diametroImpulsion: number | null
  }

  export type BombaMinAggregateOutputType = {
    id: number | null
    item: string | null
    tipoBomba: string | null
    numeroSerie: string | null
    diametroAspiracion: number | null
    diametroImpulsion: number | null
    diametroRodete: string | null
    tipoCierre: string | null
  }

  export type BombaMaxAggregateOutputType = {
    id: number | null
    item: string | null
    tipoBomba: string | null
    numeroSerie: string | null
    diametroAspiracion: number | null
    diametroImpulsion: number | null
    diametroRodete: string | null
    tipoCierre: string | null
  }

  export type BombaCountAggregateOutputType = {
    id: number
    item: number
    tipoBomba: number
    numeroSerie: number
    diametroAspiracion: number
    diametroImpulsion: number
    diametroRodete: number
    tipoCierre: number
    _all: number
  }


  export type BombaAvgAggregateInputType = {
    id?: true
    diametroAspiracion?: true
    diametroImpulsion?: true
  }

  export type BombaSumAggregateInputType = {
    id?: true
    diametroAspiracion?: true
    diametroImpulsion?: true
  }

  export type BombaMinAggregateInputType = {
    id?: true
    item?: true
    tipoBomba?: true
    numeroSerie?: true
    diametroAspiracion?: true
    diametroImpulsion?: true
    diametroRodete?: true
    tipoCierre?: true
  }

  export type BombaMaxAggregateInputType = {
    id?: true
    item?: true
    tipoBomba?: true
    numeroSerie?: true
    diametroAspiracion?: true
    diametroImpulsion?: true
    diametroRodete?: true
    tipoCierre?: true
  }

  export type BombaCountAggregateInputType = {
    id?: true
    item?: true
    tipoBomba?: true
    numeroSerie?: true
    diametroAspiracion?: true
    diametroImpulsion?: true
    diametroRodete?: true
    tipoCierre?: true
    _all?: true
  }

  export type BombaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bomba to aggregate.
     */
    where?: BombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bombas to fetch.
     */
    orderBy?: BombaOrderByWithRelationInput | BombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bombas
    **/
    _count?: true | BombaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BombaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BombaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BombaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BombaMaxAggregateInputType
  }

  export type GetBombaAggregateType<T extends BombaAggregateArgs> = {
        [P in keyof T & keyof AggregateBomba]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBomba[P]>
      : GetScalarType<T[P], AggregateBomba[P]>
  }




  export type BombaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BombaWhereInput
    orderBy?: BombaOrderByWithAggregationInput | BombaOrderByWithAggregationInput[]
    by: BombaScalarFieldEnum[] | BombaScalarFieldEnum
    having?: BombaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BombaCountAggregateInputType | true
    _avg?: BombaAvgAggregateInputType
    _sum?: BombaSumAggregateInputType
    _min?: BombaMinAggregateInputType
    _max?: BombaMaxAggregateInputType
  }

  export type BombaGroupByOutputType = {
    id: number
    item: string | null
    tipoBomba: string | null
    numeroSerie: string | null
    diametroAspiracion: number | null
    diametroImpulsion: number | null
    diametroRodete: string | null
    tipoCierre: string | null
    _count: BombaCountAggregateOutputType | null
    _avg: BombaAvgAggregateOutputType | null
    _sum: BombaSumAggregateOutputType | null
    _min: BombaMinAggregateOutputType | null
    _max: BombaMaxAggregateOutputType | null
  }

  type GetBombaGroupByPayload<T extends BombaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BombaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BombaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BombaGroupByOutputType[P]>
            : GetScalarType<T[P], BombaGroupByOutputType[P]>
        }
      >
    >


  export type BombaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    tipoBomba?: boolean
    numeroSerie?: boolean
    diametroAspiracion?: boolean
    diametroImpulsion?: boolean
    diametroRodete?: boolean
    tipoCierre?: boolean
    pruebas?: boolean | Bomba$pruebasArgs<ExtArgs>
    _count?: boolean | BombaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bomba"]>

  export type BombaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    tipoBomba?: boolean
    numeroSerie?: boolean
    diametroAspiracion?: boolean
    diametroImpulsion?: boolean
    diametroRodete?: boolean
    tipoCierre?: boolean
  }, ExtArgs["result"]["bomba"]>

  export type BombaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    item?: boolean
    tipoBomba?: boolean
    numeroSerie?: boolean
    diametroAspiracion?: boolean
    diametroImpulsion?: boolean
    diametroRodete?: boolean
    tipoCierre?: boolean
  }, ExtArgs["result"]["bomba"]>

  export type BombaSelectScalar = {
    id?: boolean
    item?: boolean
    tipoBomba?: boolean
    numeroSerie?: boolean
    diametroAspiracion?: boolean
    diametroImpulsion?: boolean
    diametroRodete?: boolean
    tipoCierre?: boolean
  }

  export type BombaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "item" | "tipoBomba" | "numeroSerie" | "diametroAspiracion" | "diametroImpulsion" | "diametroRodete" | "tipoCierre", ExtArgs["result"]["bomba"]>
  export type BombaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | Bomba$pruebasArgs<ExtArgs>
    _count?: boolean | BombaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BombaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BombaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BombaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bomba"
    objects: {
      pruebas: Prisma.$PruebaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      item: string | null
      tipoBomba: string | null
      numeroSerie: string | null
      diametroAspiracion: number | null
      diametroImpulsion: number | null
      diametroRodete: string | null
      tipoCierre: string | null
    }, ExtArgs["result"]["bomba"]>
    composites: {}
  }

  type BombaGetPayload<S extends boolean | null | undefined | BombaDefaultArgs> = $Result.GetResult<Prisma.$BombaPayload, S>

  type BombaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BombaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BombaCountAggregateInputType | true
    }

  export interface BombaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bomba'], meta: { name: 'Bomba' } }
    /**
     * Find zero or one Bomba that matches the filter.
     * @param {BombaFindUniqueArgs} args - Arguments to find a Bomba
     * @example
     * // Get one Bomba
     * const bomba = await prisma.bomba.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BombaFindUniqueArgs>(args: SelectSubset<T, BombaFindUniqueArgs<ExtArgs>>): Prisma__BombaClient<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bomba that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BombaFindUniqueOrThrowArgs} args - Arguments to find a Bomba
     * @example
     * // Get one Bomba
     * const bomba = await prisma.bomba.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BombaFindUniqueOrThrowArgs>(args: SelectSubset<T, BombaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BombaClient<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bomba that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BombaFindFirstArgs} args - Arguments to find a Bomba
     * @example
     * // Get one Bomba
     * const bomba = await prisma.bomba.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BombaFindFirstArgs>(args?: SelectSubset<T, BombaFindFirstArgs<ExtArgs>>): Prisma__BombaClient<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bomba that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BombaFindFirstOrThrowArgs} args - Arguments to find a Bomba
     * @example
     * // Get one Bomba
     * const bomba = await prisma.bomba.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BombaFindFirstOrThrowArgs>(args?: SelectSubset<T, BombaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BombaClient<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bombas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BombaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bombas
     * const bombas = await prisma.bomba.findMany()
     * 
     * // Get first 10 Bombas
     * const bombas = await prisma.bomba.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bombaWithIdOnly = await prisma.bomba.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BombaFindManyArgs>(args?: SelectSubset<T, BombaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bomba.
     * @param {BombaCreateArgs} args - Arguments to create a Bomba.
     * @example
     * // Create one Bomba
     * const Bomba = await prisma.bomba.create({
     *   data: {
     *     // ... data to create a Bomba
     *   }
     * })
     * 
     */
    create<T extends BombaCreateArgs>(args: SelectSubset<T, BombaCreateArgs<ExtArgs>>): Prisma__BombaClient<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bombas.
     * @param {BombaCreateManyArgs} args - Arguments to create many Bombas.
     * @example
     * // Create many Bombas
     * const bomba = await prisma.bomba.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BombaCreateManyArgs>(args?: SelectSubset<T, BombaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bombas and returns the data saved in the database.
     * @param {BombaCreateManyAndReturnArgs} args - Arguments to create many Bombas.
     * @example
     * // Create many Bombas
     * const bomba = await prisma.bomba.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bombas and only return the `id`
     * const bombaWithIdOnly = await prisma.bomba.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BombaCreateManyAndReturnArgs>(args?: SelectSubset<T, BombaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bomba.
     * @param {BombaDeleteArgs} args - Arguments to delete one Bomba.
     * @example
     * // Delete one Bomba
     * const Bomba = await prisma.bomba.delete({
     *   where: {
     *     // ... filter to delete one Bomba
     *   }
     * })
     * 
     */
    delete<T extends BombaDeleteArgs>(args: SelectSubset<T, BombaDeleteArgs<ExtArgs>>): Prisma__BombaClient<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bomba.
     * @param {BombaUpdateArgs} args - Arguments to update one Bomba.
     * @example
     * // Update one Bomba
     * const bomba = await prisma.bomba.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BombaUpdateArgs>(args: SelectSubset<T, BombaUpdateArgs<ExtArgs>>): Prisma__BombaClient<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bombas.
     * @param {BombaDeleteManyArgs} args - Arguments to filter Bombas to delete.
     * @example
     * // Delete a few Bombas
     * const { count } = await prisma.bomba.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BombaDeleteManyArgs>(args?: SelectSubset<T, BombaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bombas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BombaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bombas
     * const bomba = await prisma.bomba.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BombaUpdateManyArgs>(args: SelectSubset<T, BombaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bombas and returns the data updated in the database.
     * @param {BombaUpdateManyAndReturnArgs} args - Arguments to update many Bombas.
     * @example
     * // Update many Bombas
     * const bomba = await prisma.bomba.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bombas and only return the `id`
     * const bombaWithIdOnly = await prisma.bomba.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BombaUpdateManyAndReturnArgs>(args: SelectSubset<T, BombaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bomba.
     * @param {BombaUpsertArgs} args - Arguments to update or create a Bomba.
     * @example
     * // Update or create a Bomba
     * const bomba = await prisma.bomba.upsert({
     *   create: {
     *     // ... data to create a Bomba
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bomba we want to update
     *   }
     * })
     */
    upsert<T extends BombaUpsertArgs>(args: SelectSubset<T, BombaUpsertArgs<ExtArgs>>): Prisma__BombaClient<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bombas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BombaCountArgs} args - Arguments to filter Bombas to count.
     * @example
     * // Count the number of Bombas
     * const count = await prisma.bomba.count({
     *   where: {
     *     // ... the filter for the Bombas we want to count
     *   }
     * })
    **/
    count<T extends BombaCountArgs>(
      args?: Subset<T, BombaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BombaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bomba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BombaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BombaAggregateArgs>(args: Subset<T, BombaAggregateArgs>): Prisma.PrismaPromise<GetBombaAggregateType<T>>

    /**
     * Group by Bomba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BombaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BombaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BombaGroupByArgs['orderBy'] }
        : { orderBy?: BombaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BombaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBombaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bomba model
   */
  readonly fields: BombaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bomba.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BombaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pruebas<T extends Bomba$pruebasArgs<ExtArgs> = {}>(args?: Subset<T, Bomba$pruebasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bomba model
   */
  interface BombaFieldRefs {
    readonly id: FieldRef<"Bomba", 'Int'>
    readonly item: FieldRef<"Bomba", 'String'>
    readonly tipoBomba: FieldRef<"Bomba", 'String'>
    readonly numeroSerie: FieldRef<"Bomba", 'String'>
    readonly diametroAspiracion: FieldRef<"Bomba", 'Float'>
    readonly diametroImpulsion: FieldRef<"Bomba", 'Float'>
    readonly diametroRodete: FieldRef<"Bomba", 'String'>
    readonly tipoCierre: FieldRef<"Bomba", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bomba findUnique
   */
  export type BombaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
    /**
     * Filter, which Bomba to fetch.
     */
    where: BombaWhereUniqueInput
  }

  /**
   * Bomba findUniqueOrThrow
   */
  export type BombaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
    /**
     * Filter, which Bomba to fetch.
     */
    where: BombaWhereUniqueInput
  }

  /**
   * Bomba findFirst
   */
  export type BombaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
    /**
     * Filter, which Bomba to fetch.
     */
    where?: BombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bombas to fetch.
     */
    orderBy?: BombaOrderByWithRelationInput | BombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bombas.
     */
    cursor?: BombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bombas.
     */
    distinct?: BombaScalarFieldEnum | BombaScalarFieldEnum[]
  }

  /**
   * Bomba findFirstOrThrow
   */
  export type BombaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
    /**
     * Filter, which Bomba to fetch.
     */
    where?: BombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bombas to fetch.
     */
    orderBy?: BombaOrderByWithRelationInput | BombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bombas.
     */
    cursor?: BombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bombas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bombas.
     */
    distinct?: BombaScalarFieldEnum | BombaScalarFieldEnum[]
  }

  /**
   * Bomba findMany
   */
  export type BombaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
    /**
     * Filter, which Bombas to fetch.
     */
    where?: BombaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bombas to fetch.
     */
    orderBy?: BombaOrderByWithRelationInput | BombaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bombas.
     */
    cursor?: BombaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bombas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bombas.
     */
    skip?: number
    distinct?: BombaScalarFieldEnum | BombaScalarFieldEnum[]
  }

  /**
   * Bomba create
   */
  export type BombaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
    /**
     * The data needed to create a Bomba.
     */
    data?: XOR<BombaCreateInput, BombaUncheckedCreateInput>
  }

  /**
   * Bomba createMany
   */
  export type BombaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bombas.
     */
    data: BombaCreateManyInput | BombaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bomba createManyAndReturn
   */
  export type BombaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * The data used to create many Bombas.
     */
    data: BombaCreateManyInput | BombaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bomba update
   */
  export type BombaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
    /**
     * The data needed to update a Bomba.
     */
    data: XOR<BombaUpdateInput, BombaUncheckedUpdateInput>
    /**
     * Choose, which Bomba to update.
     */
    where: BombaWhereUniqueInput
  }

  /**
   * Bomba updateMany
   */
  export type BombaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bombas.
     */
    data: XOR<BombaUpdateManyMutationInput, BombaUncheckedUpdateManyInput>
    /**
     * Filter which Bombas to update
     */
    where?: BombaWhereInput
    /**
     * Limit how many Bombas to update.
     */
    limit?: number
  }

  /**
   * Bomba updateManyAndReturn
   */
  export type BombaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * The data used to update Bombas.
     */
    data: XOR<BombaUpdateManyMutationInput, BombaUncheckedUpdateManyInput>
    /**
     * Filter which Bombas to update
     */
    where?: BombaWhereInput
    /**
     * Limit how many Bombas to update.
     */
    limit?: number
  }

  /**
   * Bomba upsert
   */
  export type BombaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
    /**
     * The filter to search for the Bomba to update in case it exists.
     */
    where: BombaWhereUniqueInput
    /**
     * In case the Bomba found by the `where` argument doesn't exist, create a new Bomba with this data.
     */
    create: XOR<BombaCreateInput, BombaUncheckedCreateInput>
    /**
     * In case the Bomba was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BombaUpdateInput, BombaUncheckedUpdateInput>
  }

  /**
   * Bomba delete
   */
  export type BombaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
    /**
     * Filter which Bomba to delete.
     */
    where: BombaWhereUniqueInput
  }

  /**
   * Bomba deleteMany
   */
  export type BombaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bombas to delete
     */
    where?: BombaWhereInput
    /**
     * Limit how many Bombas to delete.
     */
    limit?: number
  }

  /**
   * Bomba.pruebas
   */
  export type Bomba$pruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    where?: PruebaWhereInput
    orderBy?: PruebaOrderByWithRelationInput | PruebaOrderByWithRelationInput[]
    cursor?: PruebaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PruebaScalarFieldEnum | PruebaScalarFieldEnum[]
  }

  /**
   * Bomba without action
   */
  export type BombaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bomba
     */
    select?: BombaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bomba
     */
    omit?: BombaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BombaInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    contacto: string | null
    telefono: string | null
    email: string | null
    estado: boolean | null
    fechaCreacion: Date | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    direccion: string | null
    contacto: string | null
    telefono: string | null
    email: string | null
    estado: boolean | null
    fechaCreacion: Date | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nombre: number
    direccion: number
    contacto: number
    telefono: number
    email: number
    estado: number
    fechaCreacion: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    contacto?: true
    telefono?: true
    email?: true
    estado?: true
    fechaCreacion?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    contacto?: true
    telefono?: true
    email?: true
    estado?: true
    fechaCreacion?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nombre?: true
    direccion?: true
    contacto?: true
    telefono?: true
    email?: true
    estado?: true
    fechaCreacion?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nombre: string
    direccion: string | null
    contacto: string | null
    telefono: string | null
    email: string | null
    estado: boolean
    fechaCreacion: Date
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    contacto?: boolean
    telefono?: boolean
    email?: boolean
    estado?: boolean
    fechaCreacion?: boolean
    pruebas?: boolean | Cliente$pruebasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    contacto?: boolean
    telefono?: boolean
    email?: boolean
    estado?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    contacto?: boolean
    telefono?: boolean
    email?: boolean
    estado?: boolean
    fechaCreacion?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nombre?: boolean
    direccion?: boolean
    contacto?: boolean
    telefono?: boolean
    email?: boolean
    estado?: boolean
    fechaCreacion?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "direccion" | "contacto" | "telefono" | "email" | "estado" | "fechaCreacion", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pruebas?: boolean | Cliente$pruebasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      pruebas: Prisma.$PruebaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      direccion: string | null
      contacto: string | null
      telefono: string | null
      email: string | null
      estado: boolean
      fechaCreacion: Date
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pruebas<T extends Cliente$pruebasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pruebasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nombre: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly contacto: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly estado: FieldRef<"Cliente", 'Boolean'>
    readonly fechaCreacion: FieldRef<"Cliente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.pruebas
   */
  export type Cliente$pruebasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    where?: PruebaWhereInput
    orderBy?: PruebaOrderByWithRelationInput | PruebaOrderByWithRelationInput[]
    cursor?: PruebaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PruebaScalarFieldEnum | PruebaScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Parametro
   */

  export type AggregateParametro = {
    _count: ParametroCountAggregateOutputType | null
    _avg: ParametroAvgAggregateOutputType | null
    _sum: ParametroSumAggregateOutputType | null
    _min: ParametroMinAggregateOutputType | null
    _max: ParametroMaxAggregateOutputType | null
  }

  export type ParametroAvgAggregateOutputType = {
    id: number | null
    unidadId: number | null
  }

  export type ParametroSumAggregateOutputType = {
    id: number | null
    unidadId: number | null
  }

  export type ParametroMinAggregateOutputType = {
    id: number | null
    unidadId: number | null
    nombre: string | null
    tipoDato: string | null
    obligatorio: boolean | null
    activo: boolean | null
  }

  export type ParametroMaxAggregateOutputType = {
    id: number | null
    unidadId: number | null
    nombre: string | null
    tipoDato: string | null
    obligatorio: boolean | null
    activo: boolean | null
  }

  export type ParametroCountAggregateOutputType = {
    id: number
    unidadId: number
    nombre: number
    tipoDato: number
    obligatorio: number
    activo: number
    _all: number
  }


  export type ParametroAvgAggregateInputType = {
    id?: true
    unidadId?: true
  }

  export type ParametroSumAggregateInputType = {
    id?: true
    unidadId?: true
  }

  export type ParametroMinAggregateInputType = {
    id?: true
    unidadId?: true
    nombre?: true
    tipoDato?: true
    obligatorio?: true
    activo?: true
  }

  export type ParametroMaxAggregateInputType = {
    id?: true
    unidadId?: true
    nombre?: true
    tipoDato?: true
    obligatorio?: true
    activo?: true
  }

  export type ParametroCountAggregateInputType = {
    id?: true
    unidadId?: true
    nombre?: true
    tipoDato?: true
    obligatorio?: true
    activo?: true
    _all?: true
  }

  export type ParametroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parametro to aggregate.
     */
    where?: ParametroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parametros to fetch.
     */
    orderBy?: ParametroOrderByWithRelationInput | ParametroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParametroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parametros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parametros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parametros
    **/
    _count?: true | ParametroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParametroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParametroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParametroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParametroMaxAggregateInputType
  }

  export type GetParametroAggregateType<T extends ParametroAggregateArgs> = {
        [P in keyof T & keyof AggregateParametro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParametro[P]>
      : GetScalarType<T[P], AggregateParametro[P]>
  }




  export type ParametroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParametroWhereInput
    orderBy?: ParametroOrderByWithAggregationInput | ParametroOrderByWithAggregationInput[]
    by: ParametroScalarFieldEnum[] | ParametroScalarFieldEnum
    having?: ParametroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParametroCountAggregateInputType | true
    _avg?: ParametroAvgAggregateInputType
    _sum?: ParametroSumAggregateInputType
    _min?: ParametroMinAggregateInputType
    _max?: ParametroMaxAggregateInputType
  }

  export type ParametroGroupByOutputType = {
    id: number
    unidadId: number
    nombre: string | null
    tipoDato: string | null
    obligatorio: boolean
    activo: boolean
    _count: ParametroCountAggregateOutputType | null
    _avg: ParametroAvgAggregateOutputType | null
    _sum: ParametroSumAggregateOutputType | null
    _min: ParametroMinAggregateOutputType | null
    _max: ParametroMaxAggregateOutputType | null
  }

  type GetParametroGroupByPayload<T extends ParametroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParametroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParametroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParametroGroupByOutputType[P]>
            : GetScalarType<T[P], ParametroGroupByOutputType[P]>
        }
      >
    >


  export type ParametroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unidadId?: boolean
    nombre?: boolean
    tipoDato?: boolean
    obligatorio?: boolean
    activo?: boolean
    unidad?: boolean | UnidadDefaultArgs<ExtArgs>
    valores?: boolean | Parametro$valoresArgs<ExtArgs>
    continuos?: boolean | Parametro$continuosArgs<ExtArgs>
    _count?: boolean | ParametroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parametro"]>

  export type ParametroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unidadId?: boolean
    nombre?: boolean
    tipoDato?: boolean
    obligatorio?: boolean
    activo?: boolean
    unidad?: boolean | UnidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parametro"]>

  export type ParametroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unidadId?: boolean
    nombre?: boolean
    tipoDato?: boolean
    obligatorio?: boolean
    activo?: boolean
    unidad?: boolean | UnidadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parametro"]>

  export type ParametroSelectScalar = {
    id?: boolean
    unidadId?: boolean
    nombre?: boolean
    tipoDato?: boolean
    obligatorio?: boolean
    activo?: boolean
  }

  export type ParametroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unidadId" | "nombre" | "tipoDato" | "obligatorio" | "activo", ExtArgs["result"]["parametro"]>
  export type ParametroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unidad?: boolean | UnidadDefaultArgs<ExtArgs>
    valores?: boolean | Parametro$valoresArgs<ExtArgs>
    continuos?: boolean | Parametro$continuosArgs<ExtArgs>
    _count?: boolean | ParametroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParametroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unidad?: boolean | UnidadDefaultArgs<ExtArgs>
  }
  export type ParametroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unidad?: boolean | UnidadDefaultArgs<ExtArgs>
  }

  export type $ParametroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Parametro"
    objects: {
      unidad: Prisma.$UnidadPayload<ExtArgs>
      valores: Prisma.$PruebaParametroValorPayload<ExtArgs>[]
      continuos: Prisma.$PruebaParametroContinuoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      unidadId: number
      nombre: string | null
      tipoDato: string | null
      obligatorio: boolean
      activo: boolean
    }, ExtArgs["result"]["parametro"]>
    composites: {}
  }

  type ParametroGetPayload<S extends boolean | null | undefined | ParametroDefaultArgs> = $Result.GetResult<Prisma.$ParametroPayload, S>

  type ParametroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParametroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParametroCountAggregateInputType | true
    }

  export interface ParametroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Parametro'], meta: { name: 'Parametro' } }
    /**
     * Find zero or one Parametro that matches the filter.
     * @param {ParametroFindUniqueArgs} args - Arguments to find a Parametro
     * @example
     * // Get one Parametro
     * const parametro = await prisma.parametro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParametroFindUniqueArgs>(args: SelectSubset<T, ParametroFindUniqueArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Parametro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParametroFindUniqueOrThrowArgs} args - Arguments to find a Parametro
     * @example
     * // Get one Parametro
     * const parametro = await prisma.parametro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParametroFindUniqueOrThrowArgs>(args: SelectSubset<T, ParametroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parametro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametroFindFirstArgs} args - Arguments to find a Parametro
     * @example
     * // Get one Parametro
     * const parametro = await prisma.parametro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParametroFindFirstArgs>(args?: SelectSubset<T, ParametroFindFirstArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Parametro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametroFindFirstOrThrowArgs} args - Arguments to find a Parametro
     * @example
     * // Get one Parametro
     * const parametro = await prisma.parametro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParametroFindFirstOrThrowArgs>(args?: SelectSubset<T, ParametroFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parametros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parametros
     * const parametros = await prisma.parametro.findMany()
     * 
     * // Get first 10 Parametros
     * const parametros = await prisma.parametro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parametroWithIdOnly = await prisma.parametro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParametroFindManyArgs>(args?: SelectSubset<T, ParametroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Parametro.
     * @param {ParametroCreateArgs} args - Arguments to create a Parametro.
     * @example
     * // Create one Parametro
     * const Parametro = await prisma.parametro.create({
     *   data: {
     *     // ... data to create a Parametro
     *   }
     * })
     * 
     */
    create<T extends ParametroCreateArgs>(args: SelectSubset<T, ParametroCreateArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parametros.
     * @param {ParametroCreateManyArgs} args - Arguments to create many Parametros.
     * @example
     * // Create many Parametros
     * const parametro = await prisma.parametro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParametroCreateManyArgs>(args?: SelectSubset<T, ParametroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Parametros and returns the data saved in the database.
     * @param {ParametroCreateManyAndReturnArgs} args - Arguments to create many Parametros.
     * @example
     * // Create many Parametros
     * const parametro = await prisma.parametro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Parametros and only return the `id`
     * const parametroWithIdOnly = await prisma.parametro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParametroCreateManyAndReturnArgs>(args?: SelectSubset<T, ParametroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Parametro.
     * @param {ParametroDeleteArgs} args - Arguments to delete one Parametro.
     * @example
     * // Delete one Parametro
     * const Parametro = await prisma.parametro.delete({
     *   where: {
     *     // ... filter to delete one Parametro
     *   }
     * })
     * 
     */
    delete<T extends ParametroDeleteArgs>(args: SelectSubset<T, ParametroDeleteArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Parametro.
     * @param {ParametroUpdateArgs} args - Arguments to update one Parametro.
     * @example
     * // Update one Parametro
     * const parametro = await prisma.parametro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParametroUpdateArgs>(args: SelectSubset<T, ParametroUpdateArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parametros.
     * @param {ParametroDeleteManyArgs} args - Arguments to filter Parametros to delete.
     * @example
     * // Delete a few Parametros
     * const { count } = await prisma.parametro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParametroDeleteManyArgs>(args?: SelectSubset<T, ParametroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parametros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parametros
     * const parametro = await prisma.parametro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParametroUpdateManyArgs>(args: SelectSubset<T, ParametroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parametros and returns the data updated in the database.
     * @param {ParametroUpdateManyAndReturnArgs} args - Arguments to update many Parametros.
     * @example
     * // Update many Parametros
     * const parametro = await prisma.parametro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Parametros and only return the `id`
     * const parametroWithIdOnly = await prisma.parametro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParametroUpdateManyAndReturnArgs>(args: SelectSubset<T, ParametroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Parametro.
     * @param {ParametroUpsertArgs} args - Arguments to update or create a Parametro.
     * @example
     * // Update or create a Parametro
     * const parametro = await prisma.parametro.upsert({
     *   create: {
     *     // ... data to create a Parametro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parametro we want to update
     *   }
     * })
     */
    upsert<T extends ParametroUpsertArgs>(args: SelectSubset<T, ParametroUpsertArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parametros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametroCountArgs} args - Arguments to filter Parametros to count.
     * @example
     * // Count the number of Parametros
     * const count = await prisma.parametro.count({
     *   where: {
     *     // ... the filter for the Parametros we want to count
     *   }
     * })
    **/
    count<T extends ParametroCountArgs>(
      args?: Subset<T, ParametroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParametroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Parametro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParametroAggregateArgs>(args: Subset<T, ParametroAggregateArgs>): Prisma.PrismaPromise<GetParametroAggregateType<T>>

    /**
     * Group by Parametro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParametroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParametroGroupByArgs['orderBy'] }
        : { orderBy?: ParametroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParametroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParametroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Parametro model
   */
  readonly fields: ParametroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Parametro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParametroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unidad<T extends UnidadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnidadDefaultArgs<ExtArgs>>): Prisma__UnidadClient<$Result.GetResult<Prisma.$UnidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    valores<T extends Parametro$valoresArgs<ExtArgs> = {}>(args?: Subset<T, Parametro$valoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    continuos<T extends Parametro$continuosArgs<ExtArgs> = {}>(args?: Subset<T, Parametro$continuosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Parametro model
   */
  interface ParametroFieldRefs {
    readonly id: FieldRef<"Parametro", 'Int'>
    readonly unidadId: FieldRef<"Parametro", 'Int'>
    readonly nombre: FieldRef<"Parametro", 'String'>
    readonly tipoDato: FieldRef<"Parametro", 'String'>
    readonly obligatorio: FieldRef<"Parametro", 'Boolean'>
    readonly activo: FieldRef<"Parametro", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Parametro findUnique
   */
  export type ParametroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    /**
     * Filter, which Parametro to fetch.
     */
    where: ParametroWhereUniqueInput
  }

  /**
   * Parametro findUniqueOrThrow
   */
  export type ParametroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    /**
     * Filter, which Parametro to fetch.
     */
    where: ParametroWhereUniqueInput
  }

  /**
   * Parametro findFirst
   */
  export type ParametroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    /**
     * Filter, which Parametro to fetch.
     */
    where?: ParametroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parametros to fetch.
     */
    orderBy?: ParametroOrderByWithRelationInput | ParametroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parametros.
     */
    cursor?: ParametroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parametros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parametros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parametros.
     */
    distinct?: ParametroScalarFieldEnum | ParametroScalarFieldEnum[]
  }

  /**
   * Parametro findFirstOrThrow
   */
  export type ParametroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    /**
     * Filter, which Parametro to fetch.
     */
    where?: ParametroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parametros to fetch.
     */
    orderBy?: ParametroOrderByWithRelationInput | ParametroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parametros.
     */
    cursor?: ParametroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parametros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parametros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parametros.
     */
    distinct?: ParametroScalarFieldEnum | ParametroScalarFieldEnum[]
  }

  /**
   * Parametro findMany
   */
  export type ParametroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    /**
     * Filter, which Parametros to fetch.
     */
    where?: ParametroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parametros to fetch.
     */
    orderBy?: ParametroOrderByWithRelationInput | ParametroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parametros.
     */
    cursor?: ParametroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parametros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parametros.
     */
    skip?: number
    distinct?: ParametroScalarFieldEnum | ParametroScalarFieldEnum[]
  }

  /**
   * Parametro create
   */
  export type ParametroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    /**
     * The data needed to create a Parametro.
     */
    data: XOR<ParametroCreateInput, ParametroUncheckedCreateInput>
  }

  /**
   * Parametro createMany
   */
  export type ParametroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parametros.
     */
    data: ParametroCreateManyInput | ParametroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Parametro createManyAndReturn
   */
  export type ParametroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * The data used to create many Parametros.
     */
    data: ParametroCreateManyInput | ParametroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parametro update
   */
  export type ParametroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    /**
     * The data needed to update a Parametro.
     */
    data: XOR<ParametroUpdateInput, ParametroUncheckedUpdateInput>
    /**
     * Choose, which Parametro to update.
     */
    where: ParametroWhereUniqueInput
  }

  /**
   * Parametro updateMany
   */
  export type ParametroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parametros.
     */
    data: XOR<ParametroUpdateManyMutationInput, ParametroUncheckedUpdateManyInput>
    /**
     * Filter which Parametros to update
     */
    where?: ParametroWhereInput
    /**
     * Limit how many Parametros to update.
     */
    limit?: number
  }

  /**
   * Parametro updateManyAndReturn
   */
  export type ParametroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * The data used to update Parametros.
     */
    data: XOR<ParametroUpdateManyMutationInput, ParametroUncheckedUpdateManyInput>
    /**
     * Filter which Parametros to update
     */
    where?: ParametroWhereInput
    /**
     * Limit how many Parametros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Parametro upsert
   */
  export type ParametroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    /**
     * The filter to search for the Parametro to update in case it exists.
     */
    where: ParametroWhereUniqueInput
    /**
     * In case the Parametro found by the `where` argument doesn't exist, create a new Parametro with this data.
     */
    create: XOR<ParametroCreateInput, ParametroUncheckedCreateInput>
    /**
     * In case the Parametro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParametroUpdateInput, ParametroUncheckedUpdateInput>
  }

  /**
   * Parametro delete
   */
  export type ParametroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
    /**
     * Filter which Parametro to delete.
     */
    where: ParametroWhereUniqueInput
  }

  /**
   * Parametro deleteMany
   */
  export type ParametroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parametros to delete
     */
    where?: ParametroWhereInput
    /**
     * Limit how many Parametros to delete.
     */
    limit?: number
  }

  /**
   * Parametro.valores
   */
  export type Parametro$valoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    where?: PruebaParametroValorWhereInput
    orderBy?: PruebaParametroValorOrderByWithRelationInput | PruebaParametroValorOrderByWithRelationInput[]
    cursor?: PruebaParametroValorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PruebaParametroValorScalarFieldEnum | PruebaParametroValorScalarFieldEnum[]
  }

  /**
   * Parametro.continuos
   */
  export type Parametro$continuosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    where?: PruebaParametroContinuoWhereInput
    orderBy?: PruebaParametroContinuoOrderByWithRelationInput | PruebaParametroContinuoOrderByWithRelationInput[]
    cursor?: PruebaParametroContinuoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PruebaParametroContinuoScalarFieldEnum | PruebaParametroContinuoScalarFieldEnum[]
  }

  /**
   * Parametro without action
   */
  export type ParametroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Parametro
     */
    select?: ParametroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Parametro
     */
    omit?: ParametroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParametroInclude<ExtArgs> | null
  }


  /**
   * Model Prueba
   */

  export type AggregatePrueba = {
    _count: PruebaCountAggregateOutputType | null
    _avg: PruebaAvgAggregateOutputType | null
    _sum: PruebaSumAggregateOutputType | null
    _min: PruebaMinAggregateOutputType | null
    _max: PruebaMaxAggregateOutputType | null
  }

  export type PruebaAvgAggregateOutputType = {
    numeroProtocolo: number | null
    detallesId: number | null
    motorId: number | null
    bombaId: number | null
    clienteId: number | null
    bancoId: number | null
  }

  export type PruebaSumAggregateOutputType = {
    numeroProtocolo: number | null
    detallesId: number | null
    motorId: number | null
    bombaId: number | null
    clienteId: number | null
    bancoId: number | null
  }

  export type PruebaMinAggregateOutputType = {
    numeroProtocolo: number | null
    detallesId: number | null
    motorId: number | null
    bombaId: number | null
    clienteId: number | null
    bancoId: number | null
    fecha: Date | null
  }

  export type PruebaMaxAggregateOutputType = {
    numeroProtocolo: number | null
    detallesId: number | null
    motorId: number | null
    bombaId: number | null
    clienteId: number | null
    bancoId: number | null
    fecha: Date | null
  }

  export type PruebaCountAggregateOutputType = {
    numeroProtocolo: number
    detallesId: number
    motorId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha: number
    _all: number
  }


  export type PruebaAvgAggregateInputType = {
    numeroProtocolo?: true
    detallesId?: true
    motorId?: true
    bombaId?: true
    clienteId?: true
    bancoId?: true
  }

  export type PruebaSumAggregateInputType = {
    numeroProtocolo?: true
    detallesId?: true
    motorId?: true
    bombaId?: true
    clienteId?: true
    bancoId?: true
  }

  export type PruebaMinAggregateInputType = {
    numeroProtocolo?: true
    detallesId?: true
    motorId?: true
    bombaId?: true
    clienteId?: true
    bancoId?: true
    fecha?: true
  }

  export type PruebaMaxAggregateInputType = {
    numeroProtocolo?: true
    detallesId?: true
    motorId?: true
    bombaId?: true
    clienteId?: true
    bancoId?: true
    fecha?: true
  }

  export type PruebaCountAggregateInputType = {
    numeroProtocolo?: true
    detallesId?: true
    motorId?: true
    bombaId?: true
    clienteId?: true
    bancoId?: true
    fecha?: true
    _all?: true
  }

  export type PruebaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prueba to aggregate.
     */
    where?: PruebaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pruebas to fetch.
     */
    orderBy?: PruebaOrderByWithRelationInput | PruebaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PruebaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pruebas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pruebas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pruebas
    **/
    _count?: true | PruebaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PruebaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PruebaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PruebaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PruebaMaxAggregateInputType
  }

  export type GetPruebaAggregateType<T extends PruebaAggregateArgs> = {
        [P in keyof T & keyof AggregatePrueba]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrueba[P]>
      : GetScalarType<T[P], AggregatePrueba[P]>
  }




  export type PruebaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaWhereInput
    orderBy?: PruebaOrderByWithAggregationInput | PruebaOrderByWithAggregationInput[]
    by: PruebaScalarFieldEnum[] | PruebaScalarFieldEnum
    having?: PruebaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PruebaCountAggregateInputType | true
    _avg?: PruebaAvgAggregateInputType
    _sum?: PruebaSumAggregateInputType
    _min?: PruebaMinAggregateInputType
    _max?: PruebaMaxAggregateInputType
  }

  export type PruebaGroupByOutputType = {
    numeroProtocolo: number
    detallesId: number
    motorId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha: Date
    _count: PruebaCountAggregateOutputType | null
    _avg: PruebaAvgAggregateOutputType | null
    _sum: PruebaSumAggregateOutputType | null
    _min: PruebaMinAggregateOutputType | null
    _max: PruebaMaxAggregateOutputType | null
  }

  type GetPruebaGroupByPayload<T extends PruebaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PruebaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PruebaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PruebaGroupByOutputType[P]>
            : GetScalarType<T[P], PruebaGroupByOutputType[P]>
        }
      >
    >


  export type PruebaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numeroProtocolo?: boolean
    detallesId?: boolean
    motorId?: boolean
    bombaId?: boolean
    clienteId?: boolean
    bancoId?: boolean
    fecha?: boolean
    detalles?: boolean | DetallesDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
    bomba?: boolean | BombaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
    valores?: boolean | Prueba$valoresArgs<ExtArgs>
    continuos?: boolean | Prueba$continuosArgs<ExtArgs>
    _count?: boolean | PruebaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prueba"]>

  export type PruebaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numeroProtocolo?: boolean
    detallesId?: boolean
    motorId?: boolean
    bombaId?: boolean
    clienteId?: boolean
    bancoId?: boolean
    fecha?: boolean
    detalles?: boolean | DetallesDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
    bomba?: boolean | BombaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prueba"]>

  export type PruebaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    numeroProtocolo?: boolean
    detallesId?: boolean
    motorId?: boolean
    bombaId?: boolean
    clienteId?: boolean
    bancoId?: boolean
    fecha?: boolean
    detalles?: boolean | DetallesDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
    bomba?: boolean | BombaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prueba"]>

  export type PruebaSelectScalar = {
    numeroProtocolo?: boolean
    detallesId?: boolean
    motorId?: boolean
    bombaId?: boolean
    clienteId?: boolean
    bancoId?: boolean
    fecha?: boolean
  }

  export type PruebaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"numeroProtocolo" | "detallesId" | "motorId" | "bombaId" | "clienteId" | "bancoId" | "fecha", ExtArgs["result"]["prueba"]>
  export type PruebaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | DetallesDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
    bomba?: boolean | BombaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
    valores?: boolean | Prueba$valoresArgs<ExtArgs>
    continuos?: boolean | Prueba$continuosArgs<ExtArgs>
    _count?: boolean | PruebaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PruebaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | DetallesDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
    bomba?: boolean | BombaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }
  export type PruebaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    detalles?: boolean | DetallesDefaultArgs<ExtArgs>
    motor?: boolean | MotorDefaultArgs<ExtArgs>
    bomba?: boolean | BombaDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    banco?: boolean | BancoDefaultArgs<ExtArgs>
  }

  export type $PruebaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prueba"
    objects: {
      detalles: Prisma.$DetallesPayload<ExtArgs>
      motor: Prisma.$MotorPayload<ExtArgs>
      bomba: Prisma.$BombaPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      banco: Prisma.$BancoPayload<ExtArgs>
      valores: Prisma.$PruebaParametroValorPayload<ExtArgs>[]
      continuos: Prisma.$PruebaParametroContinuoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      numeroProtocolo: number
      detallesId: number
      motorId: number
      bombaId: number
      clienteId: number
      bancoId: number
      fecha: Date
    }, ExtArgs["result"]["prueba"]>
    composites: {}
  }

  type PruebaGetPayload<S extends boolean | null | undefined | PruebaDefaultArgs> = $Result.GetResult<Prisma.$PruebaPayload, S>

  type PruebaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PruebaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PruebaCountAggregateInputType | true
    }

  export interface PruebaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prueba'], meta: { name: 'Prueba' } }
    /**
     * Find zero or one Prueba that matches the filter.
     * @param {PruebaFindUniqueArgs} args - Arguments to find a Prueba
     * @example
     * // Get one Prueba
     * const prueba = await prisma.prueba.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PruebaFindUniqueArgs>(args: SelectSubset<T, PruebaFindUniqueArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prueba that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PruebaFindUniqueOrThrowArgs} args - Arguments to find a Prueba
     * @example
     * // Get one Prueba
     * const prueba = await prisma.prueba.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PruebaFindUniqueOrThrowArgs>(args: SelectSubset<T, PruebaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prueba that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaFindFirstArgs} args - Arguments to find a Prueba
     * @example
     * // Get one Prueba
     * const prueba = await prisma.prueba.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PruebaFindFirstArgs>(args?: SelectSubset<T, PruebaFindFirstArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prueba that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaFindFirstOrThrowArgs} args - Arguments to find a Prueba
     * @example
     * // Get one Prueba
     * const prueba = await prisma.prueba.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PruebaFindFirstOrThrowArgs>(args?: SelectSubset<T, PruebaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pruebas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pruebas
     * const pruebas = await prisma.prueba.findMany()
     * 
     * // Get first 10 Pruebas
     * const pruebas = await prisma.prueba.findMany({ take: 10 })
     * 
     * // Only select the `numeroProtocolo`
     * const pruebaWithNumeroProtocoloOnly = await prisma.prueba.findMany({ select: { numeroProtocolo: true } })
     * 
     */
    findMany<T extends PruebaFindManyArgs>(args?: SelectSubset<T, PruebaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prueba.
     * @param {PruebaCreateArgs} args - Arguments to create a Prueba.
     * @example
     * // Create one Prueba
     * const Prueba = await prisma.prueba.create({
     *   data: {
     *     // ... data to create a Prueba
     *   }
     * })
     * 
     */
    create<T extends PruebaCreateArgs>(args: SelectSubset<T, PruebaCreateArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pruebas.
     * @param {PruebaCreateManyArgs} args - Arguments to create many Pruebas.
     * @example
     * // Create many Pruebas
     * const prueba = await prisma.prueba.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PruebaCreateManyArgs>(args?: SelectSubset<T, PruebaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pruebas and returns the data saved in the database.
     * @param {PruebaCreateManyAndReturnArgs} args - Arguments to create many Pruebas.
     * @example
     * // Create many Pruebas
     * const prueba = await prisma.prueba.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pruebas and only return the `numeroProtocolo`
     * const pruebaWithNumeroProtocoloOnly = await prisma.prueba.createManyAndReturn({
     *   select: { numeroProtocolo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PruebaCreateManyAndReturnArgs>(args?: SelectSubset<T, PruebaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prueba.
     * @param {PruebaDeleteArgs} args - Arguments to delete one Prueba.
     * @example
     * // Delete one Prueba
     * const Prueba = await prisma.prueba.delete({
     *   where: {
     *     // ... filter to delete one Prueba
     *   }
     * })
     * 
     */
    delete<T extends PruebaDeleteArgs>(args: SelectSubset<T, PruebaDeleteArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prueba.
     * @param {PruebaUpdateArgs} args - Arguments to update one Prueba.
     * @example
     * // Update one Prueba
     * const prueba = await prisma.prueba.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PruebaUpdateArgs>(args: SelectSubset<T, PruebaUpdateArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pruebas.
     * @param {PruebaDeleteManyArgs} args - Arguments to filter Pruebas to delete.
     * @example
     * // Delete a few Pruebas
     * const { count } = await prisma.prueba.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PruebaDeleteManyArgs>(args?: SelectSubset<T, PruebaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pruebas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pruebas
     * const prueba = await prisma.prueba.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PruebaUpdateManyArgs>(args: SelectSubset<T, PruebaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pruebas and returns the data updated in the database.
     * @param {PruebaUpdateManyAndReturnArgs} args - Arguments to update many Pruebas.
     * @example
     * // Update many Pruebas
     * const prueba = await prisma.prueba.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pruebas and only return the `numeroProtocolo`
     * const pruebaWithNumeroProtocoloOnly = await prisma.prueba.updateManyAndReturn({
     *   select: { numeroProtocolo: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PruebaUpdateManyAndReturnArgs>(args: SelectSubset<T, PruebaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prueba.
     * @param {PruebaUpsertArgs} args - Arguments to update or create a Prueba.
     * @example
     * // Update or create a Prueba
     * const prueba = await prisma.prueba.upsert({
     *   create: {
     *     // ... data to create a Prueba
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prueba we want to update
     *   }
     * })
     */
    upsert<T extends PruebaUpsertArgs>(args: SelectSubset<T, PruebaUpsertArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pruebas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaCountArgs} args - Arguments to filter Pruebas to count.
     * @example
     * // Count the number of Pruebas
     * const count = await prisma.prueba.count({
     *   where: {
     *     // ... the filter for the Pruebas we want to count
     *   }
     * })
    **/
    count<T extends PruebaCountArgs>(
      args?: Subset<T, PruebaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PruebaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prueba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PruebaAggregateArgs>(args: Subset<T, PruebaAggregateArgs>): Prisma.PrismaPromise<GetPruebaAggregateType<T>>

    /**
     * Group by Prueba.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PruebaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PruebaGroupByArgs['orderBy'] }
        : { orderBy?: PruebaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PruebaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPruebaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prueba model
   */
  readonly fields: PruebaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prueba.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PruebaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    detalles<T extends DetallesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DetallesDefaultArgs<ExtArgs>>): Prisma__DetallesClient<$Result.GetResult<Prisma.$DetallesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    motor<T extends MotorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MotorDefaultArgs<ExtArgs>>): Prisma__MotorClient<$Result.GetResult<Prisma.$MotorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bomba<T extends BombaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BombaDefaultArgs<ExtArgs>>): Prisma__BombaClient<$Result.GetResult<Prisma.$BombaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    banco<T extends BancoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BancoDefaultArgs<ExtArgs>>): Prisma__BancoClient<$Result.GetResult<Prisma.$BancoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    valores<T extends Prueba$valoresArgs<ExtArgs> = {}>(args?: Subset<T, Prueba$valoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    continuos<T extends Prueba$continuosArgs<ExtArgs> = {}>(args?: Subset<T, Prueba$continuosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prueba model
   */
  interface PruebaFieldRefs {
    readonly numeroProtocolo: FieldRef<"Prueba", 'Int'>
    readonly detallesId: FieldRef<"Prueba", 'Int'>
    readonly motorId: FieldRef<"Prueba", 'Int'>
    readonly bombaId: FieldRef<"Prueba", 'Int'>
    readonly clienteId: FieldRef<"Prueba", 'Int'>
    readonly bancoId: FieldRef<"Prueba", 'Int'>
    readonly fecha: FieldRef<"Prueba", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prueba findUnique
   */
  export type PruebaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    /**
     * Filter, which Prueba to fetch.
     */
    where: PruebaWhereUniqueInput
  }

  /**
   * Prueba findUniqueOrThrow
   */
  export type PruebaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    /**
     * Filter, which Prueba to fetch.
     */
    where: PruebaWhereUniqueInput
  }

  /**
   * Prueba findFirst
   */
  export type PruebaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    /**
     * Filter, which Prueba to fetch.
     */
    where?: PruebaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pruebas to fetch.
     */
    orderBy?: PruebaOrderByWithRelationInput | PruebaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pruebas.
     */
    cursor?: PruebaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pruebas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pruebas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pruebas.
     */
    distinct?: PruebaScalarFieldEnum | PruebaScalarFieldEnum[]
  }

  /**
   * Prueba findFirstOrThrow
   */
  export type PruebaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    /**
     * Filter, which Prueba to fetch.
     */
    where?: PruebaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pruebas to fetch.
     */
    orderBy?: PruebaOrderByWithRelationInput | PruebaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pruebas.
     */
    cursor?: PruebaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pruebas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pruebas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pruebas.
     */
    distinct?: PruebaScalarFieldEnum | PruebaScalarFieldEnum[]
  }

  /**
   * Prueba findMany
   */
  export type PruebaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    /**
     * Filter, which Pruebas to fetch.
     */
    where?: PruebaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pruebas to fetch.
     */
    orderBy?: PruebaOrderByWithRelationInput | PruebaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pruebas.
     */
    cursor?: PruebaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pruebas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pruebas.
     */
    skip?: number
    distinct?: PruebaScalarFieldEnum | PruebaScalarFieldEnum[]
  }

  /**
   * Prueba create
   */
  export type PruebaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    /**
     * The data needed to create a Prueba.
     */
    data: XOR<PruebaCreateInput, PruebaUncheckedCreateInput>
  }

  /**
   * Prueba createMany
   */
  export type PruebaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pruebas.
     */
    data: PruebaCreateManyInput | PruebaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prueba createManyAndReturn
   */
  export type PruebaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * The data used to create many Pruebas.
     */
    data: PruebaCreateManyInput | PruebaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prueba update
   */
  export type PruebaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    /**
     * The data needed to update a Prueba.
     */
    data: XOR<PruebaUpdateInput, PruebaUncheckedUpdateInput>
    /**
     * Choose, which Prueba to update.
     */
    where: PruebaWhereUniqueInput
  }

  /**
   * Prueba updateMany
   */
  export type PruebaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pruebas.
     */
    data: XOR<PruebaUpdateManyMutationInput, PruebaUncheckedUpdateManyInput>
    /**
     * Filter which Pruebas to update
     */
    where?: PruebaWhereInput
    /**
     * Limit how many Pruebas to update.
     */
    limit?: number
  }

  /**
   * Prueba updateManyAndReturn
   */
  export type PruebaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * The data used to update Pruebas.
     */
    data: XOR<PruebaUpdateManyMutationInput, PruebaUncheckedUpdateManyInput>
    /**
     * Filter which Pruebas to update
     */
    where?: PruebaWhereInput
    /**
     * Limit how many Pruebas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prueba upsert
   */
  export type PruebaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    /**
     * The filter to search for the Prueba to update in case it exists.
     */
    where: PruebaWhereUniqueInput
    /**
     * In case the Prueba found by the `where` argument doesn't exist, create a new Prueba with this data.
     */
    create: XOR<PruebaCreateInput, PruebaUncheckedCreateInput>
    /**
     * In case the Prueba was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PruebaUpdateInput, PruebaUncheckedUpdateInput>
  }

  /**
   * Prueba delete
   */
  export type PruebaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
    /**
     * Filter which Prueba to delete.
     */
    where: PruebaWhereUniqueInput
  }

  /**
   * Prueba deleteMany
   */
  export type PruebaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pruebas to delete
     */
    where?: PruebaWhereInput
    /**
     * Limit how many Pruebas to delete.
     */
    limit?: number
  }

  /**
   * Prueba.valores
   */
  export type Prueba$valoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    where?: PruebaParametroValorWhereInput
    orderBy?: PruebaParametroValorOrderByWithRelationInput | PruebaParametroValorOrderByWithRelationInput[]
    cursor?: PruebaParametroValorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PruebaParametroValorScalarFieldEnum | PruebaParametroValorScalarFieldEnum[]
  }

  /**
   * Prueba.continuos
   */
  export type Prueba$continuosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    where?: PruebaParametroContinuoWhereInput
    orderBy?: PruebaParametroContinuoOrderByWithRelationInput | PruebaParametroContinuoOrderByWithRelationInput[]
    cursor?: PruebaParametroContinuoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PruebaParametroContinuoScalarFieldEnum | PruebaParametroContinuoScalarFieldEnum[]
  }

  /**
   * Prueba without action
   */
  export type PruebaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prueba
     */
    select?: PruebaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prueba
     */
    omit?: PruebaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaInclude<ExtArgs> | null
  }


  /**
   * Model PruebaParametroValor
   */

  export type AggregatePruebaParametroValor = {
    _count: PruebaParametroValorCountAggregateOutputType | null
    _avg: PruebaParametroValorAvgAggregateOutputType | null
    _sum: PruebaParametroValorSumAggregateOutputType | null
    _min: PruebaParametroValorMinAggregateOutputType | null
    _max: PruebaParametroValorMaxAggregateOutputType | null
  }

  export type PruebaParametroValorAvgAggregateOutputType = {
    puntoId: number | null
    parametroId: number | null
    numeroProtocolo: number | null
    valorEntero: number | null
    valorDecimal: number | null
  }

  export type PruebaParametroValorSumAggregateOutputType = {
    puntoId: number | null
    parametroId: number | null
    numeroProtocolo: number | null
    valorEntero: number | null
    valorDecimal: number | null
  }

  export type PruebaParametroValorMinAggregateOutputType = {
    puntoId: number | null
    parametroId: number | null
    numeroProtocolo: number | null
    valorEntero: number | null
    valorDecimal: number | null
    valorTexto: string | null
    valorFecha: Date | null
    valorBool: boolean | null
  }

  export type PruebaParametroValorMaxAggregateOutputType = {
    puntoId: number | null
    parametroId: number | null
    numeroProtocolo: number | null
    valorEntero: number | null
    valorDecimal: number | null
    valorTexto: string | null
    valorFecha: Date | null
    valorBool: boolean | null
  }

  export type PruebaParametroValorCountAggregateOutputType = {
    puntoId: number
    parametroId: number
    numeroProtocolo: number
    valorEntero: number
    valorDecimal: number
    valorTexto: number
    valorFecha: number
    valorBool: number
    _all: number
  }


  export type PruebaParametroValorAvgAggregateInputType = {
    puntoId?: true
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
  }

  export type PruebaParametroValorSumAggregateInputType = {
    puntoId?: true
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
  }

  export type PruebaParametroValorMinAggregateInputType = {
    puntoId?: true
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
    valorTexto?: true
    valorFecha?: true
    valorBool?: true
  }

  export type PruebaParametroValorMaxAggregateInputType = {
    puntoId?: true
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
    valorTexto?: true
    valorFecha?: true
    valorBool?: true
  }

  export type PruebaParametroValorCountAggregateInputType = {
    puntoId?: true
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
    valorTexto?: true
    valorFecha?: true
    valorBool?: true
    _all?: true
  }

  export type PruebaParametroValorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PruebaParametroValor to aggregate.
     */
    where?: PruebaParametroValorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PruebaParametroValors to fetch.
     */
    orderBy?: PruebaParametroValorOrderByWithRelationInput | PruebaParametroValorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PruebaParametroValorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PruebaParametroValors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PruebaParametroValors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PruebaParametroValors
    **/
    _count?: true | PruebaParametroValorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PruebaParametroValorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PruebaParametroValorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PruebaParametroValorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PruebaParametroValorMaxAggregateInputType
  }

  export type GetPruebaParametroValorAggregateType<T extends PruebaParametroValorAggregateArgs> = {
        [P in keyof T & keyof AggregatePruebaParametroValor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePruebaParametroValor[P]>
      : GetScalarType<T[P], AggregatePruebaParametroValor[P]>
  }




  export type PruebaParametroValorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaParametroValorWhereInput
    orderBy?: PruebaParametroValorOrderByWithAggregationInput | PruebaParametroValorOrderByWithAggregationInput[]
    by: PruebaParametroValorScalarFieldEnum[] | PruebaParametroValorScalarFieldEnum
    having?: PruebaParametroValorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PruebaParametroValorCountAggregateInputType | true
    _avg?: PruebaParametroValorAvgAggregateInputType
    _sum?: PruebaParametroValorSumAggregateInputType
    _min?: PruebaParametroValorMinAggregateInputType
    _max?: PruebaParametroValorMaxAggregateInputType
  }

  export type PruebaParametroValorGroupByOutputType = {
    puntoId: number
    parametroId: number
    numeroProtocolo: number
    valorEntero: number | null
    valorDecimal: number | null
    valorTexto: string | null
    valorFecha: Date | null
    valorBool: boolean | null
    _count: PruebaParametroValorCountAggregateOutputType | null
    _avg: PruebaParametroValorAvgAggregateOutputType | null
    _sum: PruebaParametroValorSumAggregateOutputType | null
    _min: PruebaParametroValorMinAggregateOutputType | null
    _max: PruebaParametroValorMaxAggregateOutputType | null
  }

  type GetPruebaParametroValorGroupByPayload<T extends PruebaParametroValorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PruebaParametroValorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PruebaParametroValorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PruebaParametroValorGroupByOutputType[P]>
            : GetScalarType<T[P], PruebaParametroValorGroupByOutputType[P]>
        }
      >
    >


  export type PruebaParametroValorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    puntoId?: boolean
    parametroId?: boolean
    numeroProtocolo?: boolean
    valorEntero?: boolean
    valorDecimal?: boolean
    valorTexto?: boolean
    valorFecha?: boolean
    valorBool?: boolean
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pruebaParametroValor"]>

  export type PruebaParametroValorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    puntoId?: boolean
    parametroId?: boolean
    numeroProtocolo?: boolean
    valorEntero?: boolean
    valorDecimal?: boolean
    valorTexto?: boolean
    valorFecha?: boolean
    valorBool?: boolean
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pruebaParametroValor"]>

  export type PruebaParametroValorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    puntoId?: boolean
    parametroId?: boolean
    numeroProtocolo?: boolean
    valorEntero?: boolean
    valorDecimal?: boolean
    valorTexto?: boolean
    valorFecha?: boolean
    valorBool?: boolean
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pruebaParametroValor"]>

  export type PruebaParametroValorSelectScalar = {
    puntoId?: boolean
    parametroId?: boolean
    numeroProtocolo?: boolean
    valorEntero?: boolean
    valorDecimal?: boolean
    valorTexto?: boolean
    valorFecha?: boolean
    valorBool?: boolean
  }

  export type PruebaParametroValorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"puntoId" | "parametroId" | "numeroProtocolo" | "valorEntero" | "valorDecimal" | "valorTexto" | "valorFecha" | "valorBool", ExtArgs["result"]["pruebaParametroValor"]>
  export type PruebaParametroValorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }
  export type PruebaParametroValorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }
  export type PruebaParametroValorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }

  export type $PruebaParametroValorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PruebaParametroValor"
    objects: {
      parametro: Prisma.$ParametroPayload<ExtArgs>
      prueba: Prisma.$PruebaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      puntoId: number
      parametroId: number
      numeroProtocolo: number
      valorEntero: number | null
      valorDecimal: number | null
      valorTexto: string | null
      valorFecha: Date | null
      valorBool: boolean | null
    }, ExtArgs["result"]["pruebaParametroValor"]>
    composites: {}
  }

  type PruebaParametroValorGetPayload<S extends boolean | null | undefined | PruebaParametroValorDefaultArgs> = $Result.GetResult<Prisma.$PruebaParametroValorPayload, S>

  type PruebaParametroValorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PruebaParametroValorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PruebaParametroValorCountAggregateInputType | true
    }

  export interface PruebaParametroValorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PruebaParametroValor'], meta: { name: 'PruebaParametroValor' } }
    /**
     * Find zero or one PruebaParametroValor that matches the filter.
     * @param {PruebaParametroValorFindUniqueArgs} args - Arguments to find a PruebaParametroValor
     * @example
     * // Get one PruebaParametroValor
     * const pruebaParametroValor = await prisma.pruebaParametroValor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PruebaParametroValorFindUniqueArgs>(args: SelectSubset<T, PruebaParametroValorFindUniqueArgs<ExtArgs>>): Prisma__PruebaParametroValorClient<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PruebaParametroValor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PruebaParametroValorFindUniqueOrThrowArgs} args - Arguments to find a PruebaParametroValor
     * @example
     * // Get one PruebaParametroValor
     * const pruebaParametroValor = await prisma.pruebaParametroValor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PruebaParametroValorFindUniqueOrThrowArgs>(args: SelectSubset<T, PruebaParametroValorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PruebaParametroValorClient<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PruebaParametroValor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroValorFindFirstArgs} args - Arguments to find a PruebaParametroValor
     * @example
     * // Get one PruebaParametroValor
     * const pruebaParametroValor = await prisma.pruebaParametroValor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PruebaParametroValorFindFirstArgs>(args?: SelectSubset<T, PruebaParametroValorFindFirstArgs<ExtArgs>>): Prisma__PruebaParametroValorClient<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PruebaParametroValor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroValorFindFirstOrThrowArgs} args - Arguments to find a PruebaParametroValor
     * @example
     * // Get one PruebaParametroValor
     * const pruebaParametroValor = await prisma.pruebaParametroValor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PruebaParametroValorFindFirstOrThrowArgs>(args?: SelectSubset<T, PruebaParametroValorFindFirstOrThrowArgs<ExtArgs>>): Prisma__PruebaParametroValorClient<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PruebaParametroValors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroValorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PruebaParametroValors
     * const pruebaParametroValors = await prisma.pruebaParametroValor.findMany()
     * 
     * // Get first 10 PruebaParametroValors
     * const pruebaParametroValors = await prisma.pruebaParametroValor.findMany({ take: 10 })
     * 
     * // Only select the `puntoId`
     * const pruebaParametroValorWithPuntoIdOnly = await prisma.pruebaParametroValor.findMany({ select: { puntoId: true } })
     * 
     */
    findMany<T extends PruebaParametroValorFindManyArgs>(args?: SelectSubset<T, PruebaParametroValorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PruebaParametroValor.
     * @param {PruebaParametroValorCreateArgs} args - Arguments to create a PruebaParametroValor.
     * @example
     * // Create one PruebaParametroValor
     * const PruebaParametroValor = await prisma.pruebaParametroValor.create({
     *   data: {
     *     // ... data to create a PruebaParametroValor
     *   }
     * })
     * 
     */
    create<T extends PruebaParametroValorCreateArgs>(args: SelectSubset<T, PruebaParametroValorCreateArgs<ExtArgs>>): Prisma__PruebaParametroValorClient<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PruebaParametroValors.
     * @param {PruebaParametroValorCreateManyArgs} args - Arguments to create many PruebaParametroValors.
     * @example
     * // Create many PruebaParametroValors
     * const pruebaParametroValor = await prisma.pruebaParametroValor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PruebaParametroValorCreateManyArgs>(args?: SelectSubset<T, PruebaParametroValorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PruebaParametroValors and returns the data saved in the database.
     * @param {PruebaParametroValorCreateManyAndReturnArgs} args - Arguments to create many PruebaParametroValors.
     * @example
     * // Create many PruebaParametroValors
     * const pruebaParametroValor = await prisma.pruebaParametroValor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PruebaParametroValors and only return the `puntoId`
     * const pruebaParametroValorWithPuntoIdOnly = await prisma.pruebaParametroValor.createManyAndReturn({
     *   select: { puntoId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PruebaParametroValorCreateManyAndReturnArgs>(args?: SelectSubset<T, PruebaParametroValorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PruebaParametroValor.
     * @param {PruebaParametroValorDeleteArgs} args - Arguments to delete one PruebaParametroValor.
     * @example
     * // Delete one PruebaParametroValor
     * const PruebaParametroValor = await prisma.pruebaParametroValor.delete({
     *   where: {
     *     // ... filter to delete one PruebaParametroValor
     *   }
     * })
     * 
     */
    delete<T extends PruebaParametroValorDeleteArgs>(args: SelectSubset<T, PruebaParametroValorDeleteArgs<ExtArgs>>): Prisma__PruebaParametroValorClient<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PruebaParametroValor.
     * @param {PruebaParametroValorUpdateArgs} args - Arguments to update one PruebaParametroValor.
     * @example
     * // Update one PruebaParametroValor
     * const pruebaParametroValor = await prisma.pruebaParametroValor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PruebaParametroValorUpdateArgs>(args: SelectSubset<T, PruebaParametroValorUpdateArgs<ExtArgs>>): Prisma__PruebaParametroValorClient<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PruebaParametroValors.
     * @param {PruebaParametroValorDeleteManyArgs} args - Arguments to filter PruebaParametroValors to delete.
     * @example
     * // Delete a few PruebaParametroValors
     * const { count } = await prisma.pruebaParametroValor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PruebaParametroValorDeleteManyArgs>(args?: SelectSubset<T, PruebaParametroValorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PruebaParametroValors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroValorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PruebaParametroValors
     * const pruebaParametroValor = await prisma.pruebaParametroValor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PruebaParametroValorUpdateManyArgs>(args: SelectSubset<T, PruebaParametroValorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PruebaParametroValors and returns the data updated in the database.
     * @param {PruebaParametroValorUpdateManyAndReturnArgs} args - Arguments to update many PruebaParametroValors.
     * @example
     * // Update many PruebaParametroValors
     * const pruebaParametroValor = await prisma.pruebaParametroValor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PruebaParametroValors and only return the `puntoId`
     * const pruebaParametroValorWithPuntoIdOnly = await prisma.pruebaParametroValor.updateManyAndReturn({
     *   select: { puntoId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PruebaParametroValorUpdateManyAndReturnArgs>(args: SelectSubset<T, PruebaParametroValorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PruebaParametroValor.
     * @param {PruebaParametroValorUpsertArgs} args - Arguments to update or create a PruebaParametroValor.
     * @example
     * // Update or create a PruebaParametroValor
     * const pruebaParametroValor = await prisma.pruebaParametroValor.upsert({
     *   create: {
     *     // ... data to create a PruebaParametroValor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PruebaParametroValor we want to update
     *   }
     * })
     */
    upsert<T extends PruebaParametroValorUpsertArgs>(args: SelectSubset<T, PruebaParametroValorUpsertArgs<ExtArgs>>): Prisma__PruebaParametroValorClient<$Result.GetResult<Prisma.$PruebaParametroValorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PruebaParametroValors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroValorCountArgs} args - Arguments to filter PruebaParametroValors to count.
     * @example
     * // Count the number of PruebaParametroValors
     * const count = await prisma.pruebaParametroValor.count({
     *   where: {
     *     // ... the filter for the PruebaParametroValors we want to count
     *   }
     * })
    **/
    count<T extends PruebaParametroValorCountArgs>(
      args?: Subset<T, PruebaParametroValorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PruebaParametroValorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PruebaParametroValor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroValorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PruebaParametroValorAggregateArgs>(args: Subset<T, PruebaParametroValorAggregateArgs>): Prisma.PrismaPromise<GetPruebaParametroValorAggregateType<T>>

    /**
     * Group by PruebaParametroValor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroValorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PruebaParametroValorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PruebaParametroValorGroupByArgs['orderBy'] }
        : { orderBy?: PruebaParametroValorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PruebaParametroValorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPruebaParametroValorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PruebaParametroValor model
   */
  readonly fields: PruebaParametroValorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PruebaParametroValor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PruebaParametroValorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parametro<T extends ParametroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParametroDefaultArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prueba<T extends PruebaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PruebaDefaultArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PruebaParametroValor model
   */
  interface PruebaParametroValorFieldRefs {
    readonly puntoId: FieldRef<"PruebaParametroValor", 'Int'>
    readonly parametroId: FieldRef<"PruebaParametroValor", 'Int'>
    readonly numeroProtocolo: FieldRef<"PruebaParametroValor", 'Int'>
    readonly valorEntero: FieldRef<"PruebaParametroValor", 'Int'>
    readonly valorDecimal: FieldRef<"PruebaParametroValor", 'Float'>
    readonly valorTexto: FieldRef<"PruebaParametroValor", 'String'>
    readonly valorFecha: FieldRef<"PruebaParametroValor", 'DateTime'>
    readonly valorBool: FieldRef<"PruebaParametroValor", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PruebaParametroValor findUnique
   */
  export type PruebaParametroValorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroValor to fetch.
     */
    where: PruebaParametroValorWhereUniqueInput
  }

  /**
   * PruebaParametroValor findUniqueOrThrow
   */
  export type PruebaParametroValorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroValor to fetch.
     */
    where: PruebaParametroValorWhereUniqueInput
  }

  /**
   * PruebaParametroValor findFirst
   */
  export type PruebaParametroValorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroValor to fetch.
     */
    where?: PruebaParametroValorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PruebaParametroValors to fetch.
     */
    orderBy?: PruebaParametroValorOrderByWithRelationInput | PruebaParametroValorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PruebaParametroValors.
     */
    cursor?: PruebaParametroValorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PruebaParametroValors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PruebaParametroValors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PruebaParametroValors.
     */
    distinct?: PruebaParametroValorScalarFieldEnum | PruebaParametroValorScalarFieldEnum[]
  }

  /**
   * PruebaParametroValor findFirstOrThrow
   */
  export type PruebaParametroValorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroValor to fetch.
     */
    where?: PruebaParametroValorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PruebaParametroValors to fetch.
     */
    orderBy?: PruebaParametroValorOrderByWithRelationInput | PruebaParametroValorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PruebaParametroValors.
     */
    cursor?: PruebaParametroValorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PruebaParametroValors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PruebaParametroValors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PruebaParametroValors.
     */
    distinct?: PruebaParametroValorScalarFieldEnum | PruebaParametroValorScalarFieldEnum[]
  }

  /**
   * PruebaParametroValor findMany
   */
  export type PruebaParametroValorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroValors to fetch.
     */
    where?: PruebaParametroValorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PruebaParametroValors to fetch.
     */
    orderBy?: PruebaParametroValorOrderByWithRelationInput | PruebaParametroValorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PruebaParametroValors.
     */
    cursor?: PruebaParametroValorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PruebaParametroValors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PruebaParametroValors.
     */
    skip?: number
    distinct?: PruebaParametroValorScalarFieldEnum | PruebaParametroValorScalarFieldEnum[]
  }

  /**
   * PruebaParametroValor create
   */
  export type PruebaParametroValorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    /**
     * The data needed to create a PruebaParametroValor.
     */
    data: XOR<PruebaParametroValorCreateInput, PruebaParametroValorUncheckedCreateInput>
  }

  /**
   * PruebaParametroValor createMany
   */
  export type PruebaParametroValorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PruebaParametroValors.
     */
    data: PruebaParametroValorCreateManyInput | PruebaParametroValorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PruebaParametroValor createManyAndReturn
   */
  export type PruebaParametroValorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * The data used to create many PruebaParametroValors.
     */
    data: PruebaParametroValorCreateManyInput | PruebaParametroValorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PruebaParametroValor update
   */
  export type PruebaParametroValorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    /**
     * The data needed to update a PruebaParametroValor.
     */
    data: XOR<PruebaParametroValorUpdateInput, PruebaParametroValorUncheckedUpdateInput>
    /**
     * Choose, which PruebaParametroValor to update.
     */
    where: PruebaParametroValorWhereUniqueInput
  }

  /**
   * PruebaParametroValor updateMany
   */
  export type PruebaParametroValorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PruebaParametroValors.
     */
    data: XOR<PruebaParametroValorUpdateManyMutationInput, PruebaParametroValorUncheckedUpdateManyInput>
    /**
     * Filter which PruebaParametroValors to update
     */
    where?: PruebaParametroValorWhereInput
    /**
     * Limit how many PruebaParametroValors to update.
     */
    limit?: number
  }

  /**
   * PruebaParametroValor updateManyAndReturn
   */
  export type PruebaParametroValorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * The data used to update PruebaParametroValors.
     */
    data: XOR<PruebaParametroValorUpdateManyMutationInput, PruebaParametroValorUncheckedUpdateManyInput>
    /**
     * Filter which PruebaParametroValors to update
     */
    where?: PruebaParametroValorWhereInput
    /**
     * Limit how many PruebaParametroValors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PruebaParametroValor upsert
   */
  export type PruebaParametroValorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    /**
     * The filter to search for the PruebaParametroValor to update in case it exists.
     */
    where: PruebaParametroValorWhereUniqueInput
    /**
     * In case the PruebaParametroValor found by the `where` argument doesn't exist, create a new PruebaParametroValor with this data.
     */
    create: XOR<PruebaParametroValorCreateInput, PruebaParametroValorUncheckedCreateInput>
    /**
     * In case the PruebaParametroValor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PruebaParametroValorUpdateInput, PruebaParametroValorUncheckedUpdateInput>
  }

  /**
   * PruebaParametroValor delete
   */
  export type PruebaParametroValorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
    /**
     * Filter which PruebaParametroValor to delete.
     */
    where: PruebaParametroValorWhereUniqueInput
  }

  /**
   * PruebaParametroValor deleteMany
   */
  export type PruebaParametroValorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PruebaParametroValors to delete
     */
    where?: PruebaParametroValorWhereInput
    /**
     * Limit how many PruebaParametroValors to delete.
     */
    limit?: number
  }

  /**
   * PruebaParametroValor without action
   */
  export type PruebaParametroValorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroValor
     */
    select?: PruebaParametroValorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroValor
     */
    omit?: PruebaParametroValorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroValorInclude<ExtArgs> | null
  }


  /**
   * Model PruebaParametroContinuo
   */

  export type AggregatePruebaParametroContinuo = {
    _count: PruebaParametroContinuoCountAggregateOutputType | null
    _avg: PruebaParametroContinuoAvgAggregateOutputType | null
    _sum: PruebaParametroContinuoSumAggregateOutputType | null
    _min: PruebaParametroContinuoMinAggregateOutputType | null
    _max: PruebaParametroContinuoMaxAggregateOutputType | null
  }

  export type PruebaParametroContinuoAvgAggregateOutputType = {
    parametroId: number | null
    numeroProtocolo: number | null
    valorEntero: number | null
    valorDecimal: number | null
  }

  export type PruebaParametroContinuoSumAggregateOutputType = {
    parametroId: number | null
    numeroProtocolo: number | null
    valorEntero: number | null
    valorDecimal: number | null
  }

  export type PruebaParametroContinuoMinAggregateOutputType = {
    fechaHora: Date | null
    parametroId: number | null
    numeroProtocolo: number | null
    valorEntero: number | null
    valorDecimal: number | null
    valorTexto: string | null
    valorFecha: Date | null
    valorBool: boolean | null
  }

  export type PruebaParametroContinuoMaxAggregateOutputType = {
    fechaHora: Date | null
    parametroId: number | null
    numeroProtocolo: number | null
    valorEntero: number | null
    valorDecimal: number | null
    valorTexto: string | null
    valorFecha: Date | null
    valorBool: boolean | null
  }

  export type PruebaParametroContinuoCountAggregateOutputType = {
    fechaHora: number
    parametroId: number
    numeroProtocolo: number
    valorEntero: number
    valorDecimal: number
    valorTexto: number
    valorFecha: number
    valorBool: number
    _all: number
  }


  export type PruebaParametroContinuoAvgAggregateInputType = {
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
  }

  export type PruebaParametroContinuoSumAggregateInputType = {
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
  }

  export type PruebaParametroContinuoMinAggregateInputType = {
    fechaHora?: true
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
    valorTexto?: true
    valorFecha?: true
    valorBool?: true
  }

  export type PruebaParametroContinuoMaxAggregateInputType = {
    fechaHora?: true
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
    valorTexto?: true
    valorFecha?: true
    valorBool?: true
  }

  export type PruebaParametroContinuoCountAggregateInputType = {
    fechaHora?: true
    parametroId?: true
    numeroProtocolo?: true
    valorEntero?: true
    valorDecimal?: true
    valorTexto?: true
    valorFecha?: true
    valorBool?: true
    _all?: true
  }

  export type PruebaParametroContinuoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PruebaParametroContinuo to aggregate.
     */
    where?: PruebaParametroContinuoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PruebaParametroContinuos to fetch.
     */
    orderBy?: PruebaParametroContinuoOrderByWithRelationInput | PruebaParametroContinuoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PruebaParametroContinuoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PruebaParametroContinuos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PruebaParametroContinuos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PruebaParametroContinuos
    **/
    _count?: true | PruebaParametroContinuoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PruebaParametroContinuoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PruebaParametroContinuoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PruebaParametroContinuoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PruebaParametroContinuoMaxAggregateInputType
  }

  export type GetPruebaParametroContinuoAggregateType<T extends PruebaParametroContinuoAggregateArgs> = {
        [P in keyof T & keyof AggregatePruebaParametroContinuo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePruebaParametroContinuo[P]>
      : GetScalarType<T[P], AggregatePruebaParametroContinuo[P]>
  }




  export type PruebaParametroContinuoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PruebaParametroContinuoWhereInput
    orderBy?: PruebaParametroContinuoOrderByWithAggregationInput | PruebaParametroContinuoOrderByWithAggregationInput[]
    by: PruebaParametroContinuoScalarFieldEnum[] | PruebaParametroContinuoScalarFieldEnum
    having?: PruebaParametroContinuoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PruebaParametroContinuoCountAggregateInputType | true
    _avg?: PruebaParametroContinuoAvgAggregateInputType
    _sum?: PruebaParametroContinuoSumAggregateInputType
    _min?: PruebaParametroContinuoMinAggregateInputType
    _max?: PruebaParametroContinuoMaxAggregateInputType
  }

  export type PruebaParametroContinuoGroupByOutputType = {
    fechaHora: Date
    parametroId: number
    numeroProtocolo: number
    valorEntero: number | null
    valorDecimal: number | null
    valorTexto: string | null
    valorFecha: Date | null
    valorBool: boolean | null
    _count: PruebaParametroContinuoCountAggregateOutputType | null
    _avg: PruebaParametroContinuoAvgAggregateOutputType | null
    _sum: PruebaParametroContinuoSumAggregateOutputType | null
    _min: PruebaParametroContinuoMinAggregateOutputType | null
    _max: PruebaParametroContinuoMaxAggregateOutputType | null
  }

  type GetPruebaParametroContinuoGroupByPayload<T extends PruebaParametroContinuoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PruebaParametroContinuoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PruebaParametroContinuoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PruebaParametroContinuoGroupByOutputType[P]>
            : GetScalarType<T[P], PruebaParametroContinuoGroupByOutputType[P]>
        }
      >
    >


  export type PruebaParametroContinuoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fechaHora?: boolean
    parametroId?: boolean
    numeroProtocolo?: boolean
    valorEntero?: boolean
    valorDecimal?: boolean
    valorTexto?: boolean
    valorFecha?: boolean
    valorBool?: boolean
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pruebaParametroContinuo"]>

  export type PruebaParametroContinuoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fechaHora?: boolean
    parametroId?: boolean
    numeroProtocolo?: boolean
    valorEntero?: boolean
    valorDecimal?: boolean
    valorTexto?: boolean
    valorFecha?: boolean
    valorBool?: boolean
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pruebaParametroContinuo"]>

  export type PruebaParametroContinuoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fechaHora?: boolean
    parametroId?: boolean
    numeroProtocolo?: boolean
    valorEntero?: boolean
    valorDecimal?: boolean
    valorTexto?: boolean
    valorFecha?: boolean
    valorBool?: boolean
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pruebaParametroContinuo"]>

  export type PruebaParametroContinuoSelectScalar = {
    fechaHora?: boolean
    parametroId?: boolean
    numeroProtocolo?: boolean
    valorEntero?: boolean
    valorDecimal?: boolean
    valorTexto?: boolean
    valorFecha?: boolean
    valorBool?: boolean
  }

  export type PruebaParametroContinuoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"fechaHora" | "parametroId" | "numeroProtocolo" | "valorEntero" | "valorDecimal" | "valorTexto" | "valorFecha" | "valorBool", ExtArgs["result"]["pruebaParametroContinuo"]>
  export type PruebaParametroContinuoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }
  export type PruebaParametroContinuoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }
  export type PruebaParametroContinuoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parametro?: boolean | ParametroDefaultArgs<ExtArgs>
    prueba?: boolean | PruebaDefaultArgs<ExtArgs>
  }

  export type $PruebaParametroContinuoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PruebaParametroContinuo"
    objects: {
      parametro: Prisma.$ParametroPayload<ExtArgs>
      prueba: Prisma.$PruebaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fechaHora: Date
      parametroId: number
      numeroProtocolo: number
      valorEntero: number | null
      valorDecimal: number | null
      valorTexto: string | null
      valorFecha: Date | null
      valorBool: boolean | null
    }, ExtArgs["result"]["pruebaParametroContinuo"]>
    composites: {}
  }

  type PruebaParametroContinuoGetPayload<S extends boolean | null | undefined | PruebaParametroContinuoDefaultArgs> = $Result.GetResult<Prisma.$PruebaParametroContinuoPayload, S>

  type PruebaParametroContinuoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PruebaParametroContinuoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PruebaParametroContinuoCountAggregateInputType | true
    }

  export interface PruebaParametroContinuoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PruebaParametroContinuo'], meta: { name: 'PruebaParametroContinuo' } }
    /**
     * Find zero or one PruebaParametroContinuo that matches the filter.
     * @param {PruebaParametroContinuoFindUniqueArgs} args - Arguments to find a PruebaParametroContinuo
     * @example
     * // Get one PruebaParametroContinuo
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PruebaParametroContinuoFindUniqueArgs>(args: SelectSubset<T, PruebaParametroContinuoFindUniqueArgs<ExtArgs>>): Prisma__PruebaParametroContinuoClient<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PruebaParametroContinuo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PruebaParametroContinuoFindUniqueOrThrowArgs} args - Arguments to find a PruebaParametroContinuo
     * @example
     * // Get one PruebaParametroContinuo
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PruebaParametroContinuoFindUniqueOrThrowArgs>(args: SelectSubset<T, PruebaParametroContinuoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PruebaParametroContinuoClient<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PruebaParametroContinuo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroContinuoFindFirstArgs} args - Arguments to find a PruebaParametroContinuo
     * @example
     * // Get one PruebaParametroContinuo
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PruebaParametroContinuoFindFirstArgs>(args?: SelectSubset<T, PruebaParametroContinuoFindFirstArgs<ExtArgs>>): Prisma__PruebaParametroContinuoClient<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PruebaParametroContinuo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroContinuoFindFirstOrThrowArgs} args - Arguments to find a PruebaParametroContinuo
     * @example
     * // Get one PruebaParametroContinuo
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PruebaParametroContinuoFindFirstOrThrowArgs>(args?: SelectSubset<T, PruebaParametroContinuoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PruebaParametroContinuoClient<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PruebaParametroContinuos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroContinuoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PruebaParametroContinuos
     * const pruebaParametroContinuos = await prisma.pruebaParametroContinuo.findMany()
     * 
     * // Get first 10 PruebaParametroContinuos
     * const pruebaParametroContinuos = await prisma.pruebaParametroContinuo.findMany({ take: 10 })
     * 
     * // Only select the `fechaHora`
     * const pruebaParametroContinuoWithFechaHoraOnly = await prisma.pruebaParametroContinuo.findMany({ select: { fechaHora: true } })
     * 
     */
    findMany<T extends PruebaParametroContinuoFindManyArgs>(args?: SelectSubset<T, PruebaParametroContinuoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PruebaParametroContinuo.
     * @param {PruebaParametroContinuoCreateArgs} args - Arguments to create a PruebaParametroContinuo.
     * @example
     * // Create one PruebaParametroContinuo
     * const PruebaParametroContinuo = await prisma.pruebaParametroContinuo.create({
     *   data: {
     *     // ... data to create a PruebaParametroContinuo
     *   }
     * })
     * 
     */
    create<T extends PruebaParametroContinuoCreateArgs>(args: SelectSubset<T, PruebaParametroContinuoCreateArgs<ExtArgs>>): Prisma__PruebaParametroContinuoClient<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PruebaParametroContinuos.
     * @param {PruebaParametroContinuoCreateManyArgs} args - Arguments to create many PruebaParametroContinuos.
     * @example
     * // Create many PruebaParametroContinuos
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PruebaParametroContinuoCreateManyArgs>(args?: SelectSubset<T, PruebaParametroContinuoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PruebaParametroContinuos and returns the data saved in the database.
     * @param {PruebaParametroContinuoCreateManyAndReturnArgs} args - Arguments to create many PruebaParametroContinuos.
     * @example
     * // Create many PruebaParametroContinuos
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PruebaParametroContinuos and only return the `fechaHora`
     * const pruebaParametroContinuoWithFechaHoraOnly = await prisma.pruebaParametroContinuo.createManyAndReturn({
     *   select: { fechaHora: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PruebaParametroContinuoCreateManyAndReturnArgs>(args?: SelectSubset<T, PruebaParametroContinuoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PruebaParametroContinuo.
     * @param {PruebaParametroContinuoDeleteArgs} args - Arguments to delete one PruebaParametroContinuo.
     * @example
     * // Delete one PruebaParametroContinuo
     * const PruebaParametroContinuo = await prisma.pruebaParametroContinuo.delete({
     *   where: {
     *     // ... filter to delete one PruebaParametroContinuo
     *   }
     * })
     * 
     */
    delete<T extends PruebaParametroContinuoDeleteArgs>(args: SelectSubset<T, PruebaParametroContinuoDeleteArgs<ExtArgs>>): Prisma__PruebaParametroContinuoClient<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PruebaParametroContinuo.
     * @param {PruebaParametroContinuoUpdateArgs} args - Arguments to update one PruebaParametroContinuo.
     * @example
     * // Update one PruebaParametroContinuo
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PruebaParametroContinuoUpdateArgs>(args: SelectSubset<T, PruebaParametroContinuoUpdateArgs<ExtArgs>>): Prisma__PruebaParametroContinuoClient<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PruebaParametroContinuos.
     * @param {PruebaParametroContinuoDeleteManyArgs} args - Arguments to filter PruebaParametroContinuos to delete.
     * @example
     * // Delete a few PruebaParametroContinuos
     * const { count } = await prisma.pruebaParametroContinuo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PruebaParametroContinuoDeleteManyArgs>(args?: SelectSubset<T, PruebaParametroContinuoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PruebaParametroContinuos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroContinuoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PruebaParametroContinuos
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PruebaParametroContinuoUpdateManyArgs>(args: SelectSubset<T, PruebaParametroContinuoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PruebaParametroContinuos and returns the data updated in the database.
     * @param {PruebaParametroContinuoUpdateManyAndReturnArgs} args - Arguments to update many PruebaParametroContinuos.
     * @example
     * // Update many PruebaParametroContinuos
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PruebaParametroContinuos and only return the `fechaHora`
     * const pruebaParametroContinuoWithFechaHoraOnly = await prisma.pruebaParametroContinuo.updateManyAndReturn({
     *   select: { fechaHora: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PruebaParametroContinuoUpdateManyAndReturnArgs>(args: SelectSubset<T, PruebaParametroContinuoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PruebaParametroContinuo.
     * @param {PruebaParametroContinuoUpsertArgs} args - Arguments to update or create a PruebaParametroContinuo.
     * @example
     * // Update or create a PruebaParametroContinuo
     * const pruebaParametroContinuo = await prisma.pruebaParametroContinuo.upsert({
     *   create: {
     *     // ... data to create a PruebaParametroContinuo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PruebaParametroContinuo we want to update
     *   }
     * })
     */
    upsert<T extends PruebaParametroContinuoUpsertArgs>(args: SelectSubset<T, PruebaParametroContinuoUpsertArgs<ExtArgs>>): Prisma__PruebaParametroContinuoClient<$Result.GetResult<Prisma.$PruebaParametroContinuoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PruebaParametroContinuos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroContinuoCountArgs} args - Arguments to filter PruebaParametroContinuos to count.
     * @example
     * // Count the number of PruebaParametroContinuos
     * const count = await prisma.pruebaParametroContinuo.count({
     *   where: {
     *     // ... the filter for the PruebaParametroContinuos we want to count
     *   }
     * })
    **/
    count<T extends PruebaParametroContinuoCountArgs>(
      args?: Subset<T, PruebaParametroContinuoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PruebaParametroContinuoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PruebaParametroContinuo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroContinuoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PruebaParametroContinuoAggregateArgs>(args: Subset<T, PruebaParametroContinuoAggregateArgs>): Prisma.PrismaPromise<GetPruebaParametroContinuoAggregateType<T>>

    /**
     * Group by PruebaParametroContinuo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PruebaParametroContinuoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PruebaParametroContinuoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PruebaParametroContinuoGroupByArgs['orderBy'] }
        : { orderBy?: PruebaParametroContinuoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PruebaParametroContinuoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPruebaParametroContinuoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PruebaParametroContinuo model
   */
  readonly fields: PruebaParametroContinuoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PruebaParametroContinuo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PruebaParametroContinuoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parametro<T extends ParametroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParametroDefaultArgs<ExtArgs>>): Prisma__ParametroClient<$Result.GetResult<Prisma.$ParametroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prueba<T extends PruebaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PruebaDefaultArgs<ExtArgs>>): Prisma__PruebaClient<$Result.GetResult<Prisma.$PruebaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PruebaParametroContinuo model
   */
  interface PruebaParametroContinuoFieldRefs {
    readonly fechaHora: FieldRef<"PruebaParametroContinuo", 'DateTime'>
    readonly parametroId: FieldRef<"PruebaParametroContinuo", 'Int'>
    readonly numeroProtocolo: FieldRef<"PruebaParametroContinuo", 'Int'>
    readonly valorEntero: FieldRef<"PruebaParametroContinuo", 'Int'>
    readonly valorDecimal: FieldRef<"PruebaParametroContinuo", 'Float'>
    readonly valorTexto: FieldRef<"PruebaParametroContinuo", 'String'>
    readonly valorFecha: FieldRef<"PruebaParametroContinuo", 'DateTime'>
    readonly valorBool: FieldRef<"PruebaParametroContinuo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PruebaParametroContinuo findUnique
   */
  export type PruebaParametroContinuoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroContinuo to fetch.
     */
    where: PruebaParametroContinuoWhereUniqueInput
  }

  /**
   * PruebaParametroContinuo findUniqueOrThrow
   */
  export type PruebaParametroContinuoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroContinuo to fetch.
     */
    where: PruebaParametroContinuoWhereUniqueInput
  }

  /**
   * PruebaParametroContinuo findFirst
   */
  export type PruebaParametroContinuoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroContinuo to fetch.
     */
    where?: PruebaParametroContinuoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PruebaParametroContinuos to fetch.
     */
    orderBy?: PruebaParametroContinuoOrderByWithRelationInput | PruebaParametroContinuoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PruebaParametroContinuos.
     */
    cursor?: PruebaParametroContinuoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PruebaParametroContinuos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PruebaParametroContinuos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PruebaParametroContinuos.
     */
    distinct?: PruebaParametroContinuoScalarFieldEnum | PruebaParametroContinuoScalarFieldEnum[]
  }

  /**
   * PruebaParametroContinuo findFirstOrThrow
   */
  export type PruebaParametroContinuoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroContinuo to fetch.
     */
    where?: PruebaParametroContinuoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PruebaParametroContinuos to fetch.
     */
    orderBy?: PruebaParametroContinuoOrderByWithRelationInput | PruebaParametroContinuoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PruebaParametroContinuos.
     */
    cursor?: PruebaParametroContinuoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PruebaParametroContinuos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PruebaParametroContinuos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PruebaParametroContinuos.
     */
    distinct?: PruebaParametroContinuoScalarFieldEnum | PruebaParametroContinuoScalarFieldEnum[]
  }

  /**
   * PruebaParametroContinuo findMany
   */
  export type PruebaParametroContinuoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    /**
     * Filter, which PruebaParametroContinuos to fetch.
     */
    where?: PruebaParametroContinuoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PruebaParametroContinuos to fetch.
     */
    orderBy?: PruebaParametroContinuoOrderByWithRelationInput | PruebaParametroContinuoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PruebaParametroContinuos.
     */
    cursor?: PruebaParametroContinuoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PruebaParametroContinuos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PruebaParametroContinuos.
     */
    skip?: number
    distinct?: PruebaParametroContinuoScalarFieldEnum | PruebaParametroContinuoScalarFieldEnum[]
  }

  /**
   * PruebaParametroContinuo create
   */
  export type PruebaParametroContinuoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    /**
     * The data needed to create a PruebaParametroContinuo.
     */
    data: XOR<PruebaParametroContinuoCreateInput, PruebaParametroContinuoUncheckedCreateInput>
  }

  /**
   * PruebaParametroContinuo createMany
   */
  export type PruebaParametroContinuoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PruebaParametroContinuos.
     */
    data: PruebaParametroContinuoCreateManyInput | PruebaParametroContinuoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PruebaParametroContinuo createManyAndReturn
   */
  export type PruebaParametroContinuoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * The data used to create many PruebaParametroContinuos.
     */
    data: PruebaParametroContinuoCreateManyInput | PruebaParametroContinuoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PruebaParametroContinuo update
   */
  export type PruebaParametroContinuoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    /**
     * The data needed to update a PruebaParametroContinuo.
     */
    data: XOR<PruebaParametroContinuoUpdateInput, PruebaParametroContinuoUncheckedUpdateInput>
    /**
     * Choose, which PruebaParametroContinuo to update.
     */
    where: PruebaParametroContinuoWhereUniqueInput
  }

  /**
   * PruebaParametroContinuo updateMany
   */
  export type PruebaParametroContinuoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PruebaParametroContinuos.
     */
    data: XOR<PruebaParametroContinuoUpdateManyMutationInput, PruebaParametroContinuoUncheckedUpdateManyInput>
    /**
     * Filter which PruebaParametroContinuos to update
     */
    where?: PruebaParametroContinuoWhereInput
    /**
     * Limit how many PruebaParametroContinuos to update.
     */
    limit?: number
  }

  /**
   * PruebaParametroContinuo updateManyAndReturn
   */
  export type PruebaParametroContinuoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * The data used to update PruebaParametroContinuos.
     */
    data: XOR<PruebaParametroContinuoUpdateManyMutationInput, PruebaParametroContinuoUncheckedUpdateManyInput>
    /**
     * Filter which PruebaParametroContinuos to update
     */
    where?: PruebaParametroContinuoWhereInput
    /**
     * Limit how many PruebaParametroContinuos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PruebaParametroContinuo upsert
   */
  export type PruebaParametroContinuoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    /**
     * The filter to search for the PruebaParametroContinuo to update in case it exists.
     */
    where: PruebaParametroContinuoWhereUniqueInput
    /**
     * In case the PruebaParametroContinuo found by the `where` argument doesn't exist, create a new PruebaParametroContinuo with this data.
     */
    create: XOR<PruebaParametroContinuoCreateInput, PruebaParametroContinuoUncheckedCreateInput>
    /**
     * In case the PruebaParametroContinuo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PruebaParametroContinuoUpdateInput, PruebaParametroContinuoUncheckedUpdateInput>
  }

  /**
   * PruebaParametroContinuo delete
   */
  export type PruebaParametroContinuoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
    /**
     * Filter which PruebaParametroContinuo to delete.
     */
    where: PruebaParametroContinuoWhereUniqueInput
  }

  /**
   * PruebaParametroContinuo deleteMany
   */
  export type PruebaParametroContinuoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PruebaParametroContinuos to delete
     */
    where?: PruebaParametroContinuoWhereInput
    /**
     * Limit how many PruebaParametroContinuos to delete.
     */
    limit?: number
  }

  /**
   * PruebaParametroContinuo without action
   */
  export type PruebaParametroContinuoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PruebaParametroContinuo
     */
    select?: PruebaParametroContinuoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PruebaParametroContinuo
     */
    omit?: PruebaParametroContinuoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PruebaParametroContinuoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoImportado
   */

  export type AggregatePedidoImportado = {
    _count: PedidoImportadoCountAggregateOutputType | null
    _avg: PedidoImportadoAvgAggregateOutputType | null
    _sum: PedidoImportadoSumAggregateOutputType | null
    _min: PedidoImportadoMinAggregateOutputType | null
    _max: PedidoImportadoMaxAggregateOutputType | null
  }

  export type PedidoImportadoAvgAggregateOutputType = {
    id: number | null
    numeroBombas: number | null
  }

  export type PedidoImportadoSumAggregateOutputType = {
    id: number | null
    numeroBombas: number | null
  }

  export type PedidoImportadoMinAggregateOutputType = {
    id: number | null
    pedido: string | null
    posicion: string | null
    modeloBomba: string | null
    ordenTrabajo: string | null
    cliente: string | null
    item: string | null
    pedidoCliente: string | null
    numeroBombas: number | null
    fechaImportacion: Date | null
    procesado: boolean | null
  }

  export type PedidoImportadoMaxAggregateOutputType = {
    id: number | null
    pedido: string | null
    posicion: string | null
    modeloBomba: string | null
    ordenTrabajo: string | null
    cliente: string | null
    item: string | null
    pedidoCliente: string | null
    numeroBombas: number | null
    fechaImportacion: Date | null
    procesado: boolean | null
  }

  export type PedidoImportadoCountAggregateOutputType = {
    id: number
    pedido: number
    posicion: number
    modeloBomba: number
    ordenTrabajo: number
    cliente: number
    item: number
    pedidoCliente: number
    numeroBombas: number
    fechaImportacion: number
    procesado: number
    _all: number
  }


  export type PedidoImportadoAvgAggregateInputType = {
    id?: true
    numeroBombas?: true
  }

  export type PedidoImportadoSumAggregateInputType = {
    id?: true
    numeroBombas?: true
  }

  export type PedidoImportadoMinAggregateInputType = {
    id?: true
    pedido?: true
    posicion?: true
    modeloBomba?: true
    ordenTrabajo?: true
    cliente?: true
    item?: true
    pedidoCliente?: true
    numeroBombas?: true
    fechaImportacion?: true
    procesado?: true
  }

  export type PedidoImportadoMaxAggregateInputType = {
    id?: true
    pedido?: true
    posicion?: true
    modeloBomba?: true
    ordenTrabajo?: true
    cliente?: true
    item?: true
    pedidoCliente?: true
    numeroBombas?: true
    fechaImportacion?: true
    procesado?: true
  }

  export type PedidoImportadoCountAggregateInputType = {
    id?: true
    pedido?: true
    posicion?: true
    modeloBomba?: true
    ordenTrabajo?: true
    cliente?: true
    item?: true
    pedidoCliente?: true
    numeroBombas?: true
    fechaImportacion?: true
    procesado?: true
    _all?: true
  }

  export type PedidoImportadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoImportado to aggregate.
     */
    where?: PedidoImportadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoImportados to fetch.
     */
    orderBy?: PedidoImportadoOrderByWithRelationInput | PedidoImportadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoImportadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoImportados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoImportados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoImportados
    **/
    _count?: true | PedidoImportadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoImportadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoImportadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoImportadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoImportadoMaxAggregateInputType
  }

  export type GetPedidoImportadoAggregateType<T extends PedidoImportadoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoImportado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoImportado[P]>
      : GetScalarType<T[P], AggregatePedidoImportado[P]>
  }




  export type PedidoImportadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoImportadoWhereInput
    orderBy?: PedidoImportadoOrderByWithAggregationInput | PedidoImportadoOrderByWithAggregationInput[]
    by: PedidoImportadoScalarFieldEnum[] | PedidoImportadoScalarFieldEnum
    having?: PedidoImportadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoImportadoCountAggregateInputType | true
    _avg?: PedidoImportadoAvgAggregateInputType
    _sum?: PedidoImportadoSumAggregateInputType
    _min?: PedidoImportadoMinAggregateInputType
    _max?: PedidoImportadoMaxAggregateInputType
  }

  export type PedidoImportadoGroupByOutputType = {
    id: number
    pedido: string
    posicion: string
    modeloBomba: string
    ordenTrabajo: string
    cliente: string
    item: string | null
    pedidoCliente: string | null
    numeroBombas: number
    fechaImportacion: Date
    procesado: boolean
    _count: PedidoImportadoCountAggregateOutputType | null
    _avg: PedidoImportadoAvgAggregateOutputType | null
    _sum: PedidoImportadoSumAggregateOutputType | null
    _min: PedidoImportadoMinAggregateOutputType | null
    _max: PedidoImportadoMaxAggregateOutputType | null
  }

  type GetPedidoImportadoGroupByPayload<T extends PedidoImportadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoImportadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoImportadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoImportadoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoImportadoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoImportadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedido?: boolean
    posicion?: boolean
    modeloBomba?: boolean
    ordenTrabajo?: boolean
    cliente?: boolean
    item?: boolean
    pedidoCliente?: boolean
    numeroBombas?: boolean
    fechaImportacion?: boolean
    procesado?: boolean
  }, ExtArgs["result"]["pedidoImportado"]>

  export type PedidoImportadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedido?: boolean
    posicion?: boolean
    modeloBomba?: boolean
    ordenTrabajo?: boolean
    cliente?: boolean
    item?: boolean
    pedidoCliente?: boolean
    numeroBombas?: boolean
    fechaImportacion?: boolean
    procesado?: boolean
  }, ExtArgs["result"]["pedidoImportado"]>

  export type PedidoImportadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedido?: boolean
    posicion?: boolean
    modeloBomba?: boolean
    ordenTrabajo?: boolean
    cliente?: boolean
    item?: boolean
    pedidoCliente?: boolean
    numeroBombas?: boolean
    fechaImportacion?: boolean
    procesado?: boolean
  }, ExtArgs["result"]["pedidoImportado"]>

  export type PedidoImportadoSelectScalar = {
    id?: boolean
    pedido?: boolean
    posicion?: boolean
    modeloBomba?: boolean
    ordenTrabajo?: boolean
    cliente?: boolean
    item?: boolean
    pedidoCliente?: boolean
    numeroBombas?: boolean
    fechaImportacion?: boolean
    procesado?: boolean
  }

  export type PedidoImportadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedido" | "posicion" | "modeloBomba" | "ordenTrabajo" | "cliente" | "item" | "pedidoCliente" | "numeroBombas" | "fechaImportacion" | "procesado", ExtArgs["result"]["pedidoImportado"]>

  export type $PedidoImportadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoImportado"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedido: string
      posicion: string
      modeloBomba: string
      ordenTrabajo: string
      cliente: string
      item: string | null
      pedidoCliente: string | null
      numeroBombas: number
      fechaImportacion: Date
      procesado: boolean
    }, ExtArgs["result"]["pedidoImportado"]>
    composites: {}
  }

  type PedidoImportadoGetPayload<S extends boolean | null | undefined | PedidoImportadoDefaultArgs> = $Result.GetResult<Prisma.$PedidoImportadoPayload, S>

  type PedidoImportadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoImportadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoImportadoCountAggregateInputType | true
    }

  export interface PedidoImportadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoImportado'], meta: { name: 'PedidoImportado' } }
    /**
     * Find zero or one PedidoImportado that matches the filter.
     * @param {PedidoImportadoFindUniqueArgs} args - Arguments to find a PedidoImportado
     * @example
     * // Get one PedidoImportado
     * const pedidoImportado = await prisma.pedidoImportado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoImportadoFindUniqueArgs>(args: SelectSubset<T, PedidoImportadoFindUniqueArgs<ExtArgs>>): Prisma__PedidoImportadoClient<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoImportado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoImportadoFindUniqueOrThrowArgs} args - Arguments to find a PedidoImportado
     * @example
     * // Get one PedidoImportado
     * const pedidoImportado = await prisma.pedidoImportado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoImportadoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoImportadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoImportadoClient<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoImportado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoImportadoFindFirstArgs} args - Arguments to find a PedidoImportado
     * @example
     * // Get one PedidoImportado
     * const pedidoImportado = await prisma.pedidoImportado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoImportadoFindFirstArgs>(args?: SelectSubset<T, PedidoImportadoFindFirstArgs<ExtArgs>>): Prisma__PedidoImportadoClient<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoImportado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoImportadoFindFirstOrThrowArgs} args - Arguments to find a PedidoImportado
     * @example
     * // Get one PedidoImportado
     * const pedidoImportado = await prisma.pedidoImportado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoImportadoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoImportadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoImportadoClient<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoImportados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoImportadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoImportados
     * const pedidoImportados = await prisma.pedidoImportado.findMany()
     * 
     * // Get first 10 PedidoImportados
     * const pedidoImportados = await prisma.pedidoImportado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoImportadoWithIdOnly = await prisma.pedidoImportado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoImportadoFindManyArgs>(args?: SelectSubset<T, PedidoImportadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoImportado.
     * @param {PedidoImportadoCreateArgs} args - Arguments to create a PedidoImportado.
     * @example
     * // Create one PedidoImportado
     * const PedidoImportado = await prisma.pedidoImportado.create({
     *   data: {
     *     // ... data to create a PedidoImportado
     *   }
     * })
     * 
     */
    create<T extends PedidoImportadoCreateArgs>(args: SelectSubset<T, PedidoImportadoCreateArgs<ExtArgs>>): Prisma__PedidoImportadoClient<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoImportados.
     * @param {PedidoImportadoCreateManyArgs} args - Arguments to create many PedidoImportados.
     * @example
     * // Create many PedidoImportados
     * const pedidoImportado = await prisma.pedidoImportado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoImportadoCreateManyArgs>(args?: SelectSubset<T, PedidoImportadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PedidoImportados and returns the data saved in the database.
     * @param {PedidoImportadoCreateManyAndReturnArgs} args - Arguments to create many PedidoImportados.
     * @example
     * // Create many PedidoImportados
     * const pedidoImportado = await prisma.pedidoImportado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PedidoImportados and only return the `id`
     * const pedidoImportadoWithIdOnly = await prisma.pedidoImportado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoImportadoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoImportadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PedidoImportado.
     * @param {PedidoImportadoDeleteArgs} args - Arguments to delete one PedidoImportado.
     * @example
     * // Delete one PedidoImportado
     * const PedidoImportado = await prisma.pedidoImportado.delete({
     *   where: {
     *     // ... filter to delete one PedidoImportado
     *   }
     * })
     * 
     */
    delete<T extends PedidoImportadoDeleteArgs>(args: SelectSubset<T, PedidoImportadoDeleteArgs<ExtArgs>>): Prisma__PedidoImportadoClient<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoImportado.
     * @param {PedidoImportadoUpdateArgs} args - Arguments to update one PedidoImportado.
     * @example
     * // Update one PedidoImportado
     * const pedidoImportado = await prisma.pedidoImportado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoImportadoUpdateArgs>(args: SelectSubset<T, PedidoImportadoUpdateArgs<ExtArgs>>): Prisma__PedidoImportadoClient<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoImportados.
     * @param {PedidoImportadoDeleteManyArgs} args - Arguments to filter PedidoImportados to delete.
     * @example
     * // Delete a few PedidoImportados
     * const { count } = await prisma.pedidoImportado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoImportadoDeleteManyArgs>(args?: SelectSubset<T, PedidoImportadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoImportados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoImportadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoImportados
     * const pedidoImportado = await prisma.pedidoImportado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoImportadoUpdateManyArgs>(args: SelectSubset<T, PedidoImportadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoImportados and returns the data updated in the database.
     * @param {PedidoImportadoUpdateManyAndReturnArgs} args - Arguments to update many PedidoImportados.
     * @example
     * // Update many PedidoImportados
     * const pedidoImportado = await prisma.pedidoImportado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PedidoImportados and only return the `id`
     * const pedidoImportadoWithIdOnly = await prisma.pedidoImportado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoImportadoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoImportadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PedidoImportado.
     * @param {PedidoImportadoUpsertArgs} args - Arguments to update or create a PedidoImportado.
     * @example
     * // Update or create a PedidoImportado
     * const pedidoImportado = await prisma.pedidoImportado.upsert({
     *   create: {
     *     // ... data to create a PedidoImportado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoImportado we want to update
     *   }
     * })
     */
    upsert<T extends PedidoImportadoUpsertArgs>(args: SelectSubset<T, PedidoImportadoUpsertArgs<ExtArgs>>): Prisma__PedidoImportadoClient<$Result.GetResult<Prisma.$PedidoImportadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoImportados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoImportadoCountArgs} args - Arguments to filter PedidoImportados to count.
     * @example
     * // Count the number of PedidoImportados
     * const count = await prisma.pedidoImportado.count({
     *   where: {
     *     // ... the filter for the PedidoImportados we want to count
     *   }
     * })
    **/
    count<T extends PedidoImportadoCountArgs>(
      args?: Subset<T, PedidoImportadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoImportadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoImportado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoImportadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoImportadoAggregateArgs>(args: Subset<T, PedidoImportadoAggregateArgs>): Prisma.PrismaPromise<GetPedidoImportadoAggregateType<T>>

    /**
     * Group by PedidoImportado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoImportadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoImportadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoImportadoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoImportadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoImportadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoImportadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoImportado model
   */
  readonly fields: PedidoImportadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoImportado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoImportadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PedidoImportado model
   */
  interface PedidoImportadoFieldRefs {
    readonly id: FieldRef<"PedidoImportado", 'Int'>
    readonly pedido: FieldRef<"PedidoImportado", 'String'>
    readonly posicion: FieldRef<"PedidoImportado", 'String'>
    readonly modeloBomba: FieldRef<"PedidoImportado", 'String'>
    readonly ordenTrabajo: FieldRef<"PedidoImportado", 'String'>
    readonly cliente: FieldRef<"PedidoImportado", 'String'>
    readonly item: FieldRef<"PedidoImportado", 'String'>
    readonly pedidoCliente: FieldRef<"PedidoImportado", 'String'>
    readonly numeroBombas: FieldRef<"PedidoImportado", 'Int'>
    readonly fechaImportacion: FieldRef<"PedidoImportado", 'DateTime'>
    readonly procesado: FieldRef<"PedidoImportado", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PedidoImportado findUnique
   */
  export type PedidoImportadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * Filter, which PedidoImportado to fetch.
     */
    where: PedidoImportadoWhereUniqueInput
  }

  /**
   * PedidoImportado findUniqueOrThrow
   */
  export type PedidoImportadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * Filter, which PedidoImportado to fetch.
     */
    where: PedidoImportadoWhereUniqueInput
  }

  /**
   * PedidoImportado findFirst
   */
  export type PedidoImportadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * Filter, which PedidoImportado to fetch.
     */
    where?: PedidoImportadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoImportados to fetch.
     */
    orderBy?: PedidoImportadoOrderByWithRelationInput | PedidoImportadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoImportados.
     */
    cursor?: PedidoImportadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoImportados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoImportados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoImportados.
     */
    distinct?: PedidoImportadoScalarFieldEnum | PedidoImportadoScalarFieldEnum[]
  }

  /**
   * PedidoImportado findFirstOrThrow
   */
  export type PedidoImportadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * Filter, which PedidoImportado to fetch.
     */
    where?: PedidoImportadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoImportados to fetch.
     */
    orderBy?: PedidoImportadoOrderByWithRelationInput | PedidoImportadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoImportados.
     */
    cursor?: PedidoImportadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoImportados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoImportados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoImportados.
     */
    distinct?: PedidoImportadoScalarFieldEnum | PedidoImportadoScalarFieldEnum[]
  }

  /**
   * PedidoImportado findMany
   */
  export type PedidoImportadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * Filter, which PedidoImportados to fetch.
     */
    where?: PedidoImportadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoImportados to fetch.
     */
    orderBy?: PedidoImportadoOrderByWithRelationInput | PedidoImportadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoImportados.
     */
    cursor?: PedidoImportadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoImportados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoImportados.
     */
    skip?: number
    distinct?: PedidoImportadoScalarFieldEnum | PedidoImportadoScalarFieldEnum[]
  }

  /**
   * PedidoImportado create
   */
  export type PedidoImportadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * The data needed to create a PedidoImportado.
     */
    data: XOR<PedidoImportadoCreateInput, PedidoImportadoUncheckedCreateInput>
  }

  /**
   * PedidoImportado createMany
   */
  export type PedidoImportadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoImportados.
     */
    data: PedidoImportadoCreateManyInput | PedidoImportadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoImportado createManyAndReturn
   */
  export type PedidoImportadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * The data used to create many PedidoImportados.
     */
    data: PedidoImportadoCreateManyInput | PedidoImportadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoImportado update
   */
  export type PedidoImportadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * The data needed to update a PedidoImportado.
     */
    data: XOR<PedidoImportadoUpdateInput, PedidoImportadoUncheckedUpdateInput>
    /**
     * Choose, which PedidoImportado to update.
     */
    where: PedidoImportadoWhereUniqueInput
  }

  /**
   * PedidoImportado updateMany
   */
  export type PedidoImportadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoImportados.
     */
    data: XOR<PedidoImportadoUpdateManyMutationInput, PedidoImportadoUncheckedUpdateManyInput>
    /**
     * Filter which PedidoImportados to update
     */
    where?: PedidoImportadoWhereInput
    /**
     * Limit how many PedidoImportados to update.
     */
    limit?: number
  }

  /**
   * PedidoImportado updateManyAndReturn
   */
  export type PedidoImportadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * The data used to update PedidoImportados.
     */
    data: XOR<PedidoImportadoUpdateManyMutationInput, PedidoImportadoUncheckedUpdateManyInput>
    /**
     * Filter which PedidoImportados to update
     */
    where?: PedidoImportadoWhereInput
    /**
     * Limit how many PedidoImportados to update.
     */
    limit?: number
  }

  /**
   * PedidoImportado upsert
   */
  export type PedidoImportadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * The filter to search for the PedidoImportado to update in case it exists.
     */
    where: PedidoImportadoWhereUniqueInput
    /**
     * In case the PedidoImportado found by the `where` argument doesn't exist, create a new PedidoImportado with this data.
     */
    create: XOR<PedidoImportadoCreateInput, PedidoImportadoUncheckedCreateInput>
    /**
     * In case the PedidoImportado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoImportadoUpdateInput, PedidoImportadoUncheckedUpdateInput>
  }

  /**
   * PedidoImportado delete
   */
  export type PedidoImportadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
    /**
     * Filter which PedidoImportado to delete.
     */
    where: PedidoImportadoWhereUniqueInput
  }

  /**
   * PedidoImportado deleteMany
   */
  export type PedidoImportadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoImportados to delete
     */
    where?: PedidoImportadoWhereInput
    /**
     * Limit how many PedidoImportados to delete.
     */
    limit?: number
  }

  /**
   * PedidoImportado without action
   */
  export type PedidoImportadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoImportado
     */
    select?: PedidoImportadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoImportado
     */
    omit?: PedidoImportadoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const FluidoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    temperatura: 'temperatura',
    viscosidad: 'viscosidad',
    densidad: 'densidad',
    caudal: 'caudal',
    altura: 'altura',
    velocidad: 'velocidad',
    potencia: 'potencia',
    rendimiento: 'rendimiento',
    caudalCoeficiente: 'caudalCoeficiente',
    alturaCoeficiente: 'alturaCoeficiente',
    rendimientoCoeficiente: 'rendimientoCoeficiente',
    npshRequerido: 'npshRequerido'
  };

  export type FluidoScalarFieldEnum = (typeof FluidoScalarFieldEnum)[keyof typeof FluidoScalarFieldEnum]


  export const UnidadScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type UnidadScalarFieldEnum = (typeof UnidadScalarFieldEnum)[keyof typeof UnidadScalarFieldEnum]


  export const MotorScalarFieldEnum: {
    id: 'id',
    marca: 'marca',
    tipo: 'tipo',
    potencia: 'potencia',
    velocidad: 'velocidad',
    intensidad: 'intensidad',
    rendimiento25: 'rendimiento25',
    rendimiento50: 'rendimiento50',
    rendimiento75: 'rendimiento75',
    rendimiento100: 'rendimiento100',
    rendimiento125: 'rendimiento125',
    estado: 'estado'
  };

  export type MotorScalarFieldEnum = (typeof MotorScalarFieldEnum)[keyof typeof MotorScalarFieldEnum]


  export const DetallesScalarFieldEnum: {
    id: 'id',
    esBombaVertical: 'esBombaVertical',
    comentario: 'comentario',
    correccionManometrica: 'correccionManometrica',
    presionAtmosferica: 'presionAtmosferica',
    temperaturaAgua: 'temperaturaAgua',
    temperaturaAmbiente: 'temperaturaAmbiente',
    temperaturaLadoAcoplamiento: 'temperaturaLadoAcoplamiento',
    temperaturaLadoBomba: 'temperaturaLadoBomba',
    tiempoFuncionamientoBomba: 'tiempoFuncionamientoBomba'
  };

  export type DetallesScalarFieldEnum = (typeof DetallesScalarFieldEnum)[keyof typeof DetallesScalarFieldEnum]


  export const BancoScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    estado: 'estado'
  };

  export type BancoScalarFieldEnum = (typeof BancoScalarFieldEnum)[keyof typeof BancoScalarFieldEnum]


  export const BombaScalarFieldEnum: {
    id: 'id',
    item: 'item',
    tipoBomba: 'tipoBomba',
    numeroSerie: 'numeroSerie',
    diametroAspiracion: 'diametroAspiracion',
    diametroImpulsion: 'diametroImpulsion',
    diametroRodete: 'diametroRodete',
    tipoCierre: 'tipoCierre'
  };

  export type BombaScalarFieldEnum = (typeof BombaScalarFieldEnum)[keyof typeof BombaScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    direccion: 'direccion',
    contacto: 'contacto',
    telefono: 'telefono',
    email: 'email',
    estado: 'estado',
    fechaCreacion: 'fechaCreacion'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const ParametroScalarFieldEnum: {
    id: 'id',
    unidadId: 'unidadId',
    nombre: 'nombre',
    tipoDato: 'tipoDato',
    obligatorio: 'obligatorio',
    activo: 'activo'
  };

  export type ParametroScalarFieldEnum = (typeof ParametroScalarFieldEnum)[keyof typeof ParametroScalarFieldEnum]


  export const PruebaScalarFieldEnum: {
    numeroProtocolo: 'numeroProtocolo',
    detallesId: 'detallesId',
    motorId: 'motorId',
    bombaId: 'bombaId',
    clienteId: 'clienteId',
    bancoId: 'bancoId',
    fecha: 'fecha'
  };

  export type PruebaScalarFieldEnum = (typeof PruebaScalarFieldEnum)[keyof typeof PruebaScalarFieldEnum]


  export const PruebaParametroValorScalarFieldEnum: {
    puntoId: 'puntoId',
    parametroId: 'parametroId',
    numeroProtocolo: 'numeroProtocolo',
    valorEntero: 'valorEntero',
    valorDecimal: 'valorDecimal',
    valorTexto: 'valorTexto',
    valorFecha: 'valorFecha',
    valorBool: 'valorBool'
  };

  export type PruebaParametroValorScalarFieldEnum = (typeof PruebaParametroValorScalarFieldEnum)[keyof typeof PruebaParametroValorScalarFieldEnum]


  export const PruebaParametroContinuoScalarFieldEnum: {
    fechaHora: 'fechaHora',
    parametroId: 'parametroId',
    numeroProtocolo: 'numeroProtocolo',
    valorEntero: 'valorEntero',
    valorDecimal: 'valorDecimal',
    valorTexto: 'valorTexto',
    valorFecha: 'valorFecha',
    valorBool: 'valorBool'
  };

  export type PruebaParametroContinuoScalarFieldEnum = (typeof PruebaParametroContinuoScalarFieldEnum)[keyof typeof PruebaParametroContinuoScalarFieldEnum]


  export const PedidoImportadoScalarFieldEnum: {
    id: 'id',
    pedido: 'pedido',
    posicion: 'posicion',
    modeloBomba: 'modeloBomba',
    ordenTrabajo: 'ordenTrabajo',
    cliente: 'cliente',
    item: 'item',
    pedidoCliente: 'pedidoCliente',
    numeroBombas: 'numeroBombas',
    fechaImportacion: 'fechaImportacion',
    procesado: 'procesado'
  };

  export type PedidoImportadoScalarFieldEnum = (typeof PedidoImportadoScalarFieldEnum)[keyof typeof PedidoImportadoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type FluidoWhereInput = {
    AND?: FluidoWhereInput | FluidoWhereInput[]
    OR?: FluidoWhereInput[]
    NOT?: FluidoWhereInput | FluidoWhereInput[]
    id?: IntFilter<"Fluido"> | number
    nombre?: StringFilter<"Fluido"> | string
    temperatura?: FloatNullableFilter<"Fluido"> | number | null
    viscosidad?: FloatNullableFilter<"Fluido"> | number | null
    densidad?: FloatNullableFilter<"Fluido"> | number | null
    caudal?: FloatNullableFilter<"Fluido"> | number | null
    altura?: FloatNullableFilter<"Fluido"> | number | null
    velocidad?: FloatNullableFilter<"Fluido"> | number | null
    potencia?: FloatNullableFilter<"Fluido"> | number | null
    rendimiento?: FloatNullableFilter<"Fluido"> | number | null
    caudalCoeficiente?: FloatNullableFilter<"Fluido"> | number | null
    alturaCoeficiente?: FloatNullableFilter<"Fluido"> | number | null
    rendimientoCoeficiente?: FloatNullableFilter<"Fluido"> | number | null
    npshRequerido?: FloatNullableFilter<"Fluido"> | number | null
  }

  export type FluidoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    temperatura?: SortOrderInput | SortOrder
    viscosidad?: SortOrderInput | SortOrder
    densidad?: SortOrderInput | SortOrder
    caudal?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    velocidad?: SortOrderInput | SortOrder
    potencia?: SortOrderInput | SortOrder
    rendimiento?: SortOrderInput | SortOrder
    caudalCoeficiente?: SortOrderInput | SortOrder
    alturaCoeficiente?: SortOrderInput | SortOrder
    rendimientoCoeficiente?: SortOrderInput | SortOrder
    npshRequerido?: SortOrderInput | SortOrder
  }

  export type FluidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FluidoWhereInput | FluidoWhereInput[]
    OR?: FluidoWhereInput[]
    NOT?: FluidoWhereInput | FluidoWhereInput[]
    nombre?: StringFilter<"Fluido"> | string
    temperatura?: FloatNullableFilter<"Fluido"> | number | null
    viscosidad?: FloatNullableFilter<"Fluido"> | number | null
    densidad?: FloatNullableFilter<"Fluido"> | number | null
    caudal?: FloatNullableFilter<"Fluido"> | number | null
    altura?: FloatNullableFilter<"Fluido"> | number | null
    velocidad?: FloatNullableFilter<"Fluido"> | number | null
    potencia?: FloatNullableFilter<"Fluido"> | number | null
    rendimiento?: FloatNullableFilter<"Fluido"> | number | null
    caudalCoeficiente?: FloatNullableFilter<"Fluido"> | number | null
    alturaCoeficiente?: FloatNullableFilter<"Fluido"> | number | null
    rendimientoCoeficiente?: FloatNullableFilter<"Fluido"> | number | null
    npshRequerido?: FloatNullableFilter<"Fluido"> | number | null
  }, "id">

  export type FluidoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    temperatura?: SortOrderInput | SortOrder
    viscosidad?: SortOrderInput | SortOrder
    densidad?: SortOrderInput | SortOrder
    caudal?: SortOrderInput | SortOrder
    altura?: SortOrderInput | SortOrder
    velocidad?: SortOrderInput | SortOrder
    potencia?: SortOrderInput | SortOrder
    rendimiento?: SortOrderInput | SortOrder
    caudalCoeficiente?: SortOrderInput | SortOrder
    alturaCoeficiente?: SortOrderInput | SortOrder
    rendimientoCoeficiente?: SortOrderInput | SortOrder
    npshRequerido?: SortOrderInput | SortOrder
    _count?: FluidoCountOrderByAggregateInput
    _avg?: FluidoAvgOrderByAggregateInput
    _max?: FluidoMaxOrderByAggregateInput
    _min?: FluidoMinOrderByAggregateInput
    _sum?: FluidoSumOrderByAggregateInput
  }

  export type FluidoScalarWhereWithAggregatesInput = {
    AND?: FluidoScalarWhereWithAggregatesInput | FluidoScalarWhereWithAggregatesInput[]
    OR?: FluidoScalarWhereWithAggregatesInput[]
    NOT?: FluidoScalarWhereWithAggregatesInput | FluidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Fluido"> | number
    nombre?: StringWithAggregatesFilter<"Fluido"> | string
    temperatura?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    viscosidad?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    densidad?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    caudal?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    altura?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    velocidad?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    potencia?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    rendimiento?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    caudalCoeficiente?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    alturaCoeficiente?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    rendimientoCoeficiente?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
    npshRequerido?: FloatNullableWithAggregatesFilter<"Fluido"> | number | null
  }

  export type UnidadWhereInput = {
    AND?: UnidadWhereInput | UnidadWhereInput[]
    OR?: UnidadWhereInput[]
    NOT?: UnidadWhereInput | UnidadWhereInput[]
    id?: IntFilter<"Unidad"> | number
    nombre?: StringFilter<"Unidad"> | string
    parametros?: ParametroListRelationFilter
  }

  export type UnidadOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    parametros?: ParametroOrderByRelationAggregateInput
  }

  export type UnidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnidadWhereInput | UnidadWhereInput[]
    OR?: UnidadWhereInput[]
    NOT?: UnidadWhereInput | UnidadWhereInput[]
    nombre?: StringFilter<"Unidad"> | string
    parametros?: ParametroListRelationFilter
  }, "id">

  export type UnidadOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: UnidadCountOrderByAggregateInput
    _avg?: UnidadAvgOrderByAggregateInput
    _max?: UnidadMaxOrderByAggregateInput
    _min?: UnidadMinOrderByAggregateInput
    _sum?: UnidadSumOrderByAggregateInput
  }

  export type UnidadScalarWhereWithAggregatesInput = {
    AND?: UnidadScalarWhereWithAggregatesInput | UnidadScalarWhereWithAggregatesInput[]
    OR?: UnidadScalarWhereWithAggregatesInput[]
    NOT?: UnidadScalarWhereWithAggregatesInput | UnidadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Unidad"> | number
    nombre?: StringWithAggregatesFilter<"Unidad"> | string
  }

  export type MotorWhereInput = {
    AND?: MotorWhereInput | MotorWhereInput[]
    OR?: MotorWhereInput[]
    NOT?: MotorWhereInput | MotorWhereInput[]
    id?: IntFilter<"Motor"> | number
    marca?: StringNullableFilter<"Motor"> | string | null
    tipo?: StringNullableFilter<"Motor"> | string | null
    potencia?: FloatNullableFilter<"Motor"> | number | null
    velocidad?: FloatNullableFilter<"Motor"> | number | null
    intensidad?: FloatNullableFilter<"Motor"> | number | null
    rendimiento25?: FloatNullableFilter<"Motor"> | number | null
    rendimiento50?: FloatNullableFilter<"Motor"> | number | null
    rendimiento75?: FloatNullableFilter<"Motor"> | number | null
    rendimiento100?: FloatNullableFilter<"Motor"> | number | null
    rendimiento125?: FloatNullableFilter<"Motor"> | number | null
    estado?: BoolFilter<"Motor"> | boolean
    pruebas?: PruebaListRelationFilter
  }

  export type MotorOrderByWithRelationInput = {
    id?: SortOrder
    marca?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    potencia?: SortOrderInput | SortOrder
    velocidad?: SortOrderInput | SortOrder
    intensidad?: SortOrderInput | SortOrder
    rendimiento25?: SortOrderInput | SortOrder
    rendimiento50?: SortOrderInput | SortOrder
    rendimiento75?: SortOrderInput | SortOrder
    rendimiento100?: SortOrderInput | SortOrder
    rendimiento125?: SortOrderInput | SortOrder
    estado?: SortOrder
    pruebas?: PruebaOrderByRelationAggregateInput
  }

  export type MotorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MotorWhereInput | MotorWhereInput[]
    OR?: MotorWhereInput[]
    NOT?: MotorWhereInput | MotorWhereInput[]
    marca?: StringNullableFilter<"Motor"> | string | null
    tipo?: StringNullableFilter<"Motor"> | string | null
    potencia?: FloatNullableFilter<"Motor"> | number | null
    velocidad?: FloatNullableFilter<"Motor"> | number | null
    intensidad?: FloatNullableFilter<"Motor"> | number | null
    rendimiento25?: FloatNullableFilter<"Motor"> | number | null
    rendimiento50?: FloatNullableFilter<"Motor"> | number | null
    rendimiento75?: FloatNullableFilter<"Motor"> | number | null
    rendimiento100?: FloatNullableFilter<"Motor"> | number | null
    rendimiento125?: FloatNullableFilter<"Motor"> | number | null
    estado?: BoolFilter<"Motor"> | boolean
    pruebas?: PruebaListRelationFilter
  }, "id">

  export type MotorOrderByWithAggregationInput = {
    id?: SortOrder
    marca?: SortOrderInput | SortOrder
    tipo?: SortOrderInput | SortOrder
    potencia?: SortOrderInput | SortOrder
    velocidad?: SortOrderInput | SortOrder
    intensidad?: SortOrderInput | SortOrder
    rendimiento25?: SortOrderInput | SortOrder
    rendimiento50?: SortOrderInput | SortOrder
    rendimiento75?: SortOrderInput | SortOrder
    rendimiento100?: SortOrderInput | SortOrder
    rendimiento125?: SortOrderInput | SortOrder
    estado?: SortOrder
    _count?: MotorCountOrderByAggregateInput
    _avg?: MotorAvgOrderByAggregateInput
    _max?: MotorMaxOrderByAggregateInput
    _min?: MotorMinOrderByAggregateInput
    _sum?: MotorSumOrderByAggregateInput
  }

  export type MotorScalarWhereWithAggregatesInput = {
    AND?: MotorScalarWhereWithAggregatesInput | MotorScalarWhereWithAggregatesInput[]
    OR?: MotorScalarWhereWithAggregatesInput[]
    NOT?: MotorScalarWhereWithAggregatesInput | MotorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Motor"> | number
    marca?: StringNullableWithAggregatesFilter<"Motor"> | string | null
    tipo?: StringNullableWithAggregatesFilter<"Motor"> | string | null
    potencia?: FloatNullableWithAggregatesFilter<"Motor"> | number | null
    velocidad?: FloatNullableWithAggregatesFilter<"Motor"> | number | null
    intensidad?: FloatNullableWithAggregatesFilter<"Motor"> | number | null
    rendimiento25?: FloatNullableWithAggregatesFilter<"Motor"> | number | null
    rendimiento50?: FloatNullableWithAggregatesFilter<"Motor"> | number | null
    rendimiento75?: FloatNullableWithAggregatesFilter<"Motor"> | number | null
    rendimiento100?: FloatNullableWithAggregatesFilter<"Motor"> | number | null
    rendimiento125?: FloatNullableWithAggregatesFilter<"Motor"> | number | null
    estado?: BoolWithAggregatesFilter<"Motor"> | boolean
  }

  export type DetallesWhereInput = {
    AND?: DetallesWhereInput | DetallesWhereInput[]
    OR?: DetallesWhereInput[]
    NOT?: DetallesWhereInput | DetallesWhereInput[]
    id?: IntFilter<"Detalles"> | number
    esBombaVertical?: BoolFilter<"Detalles"> | boolean
    comentario?: StringNullableFilter<"Detalles"> | string | null
    correccionManometrica?: FloatNullableFilter<"Detalles"> | number | null
    presionAtmosferica?: FloatNullableFilter<"Detalles"> | number | null
    temperaturaAgua?: FloatNullableFilter<"Detalles"> | number | null
    temperaturaAmbiente?: FloatNullableFilter<"Detalles"> | number | null
    temperaturaLadoAcoplamiento?: FloatNullableFilter<"Detalles"> | number | null
    temperaturaLadoBomba?: FloatNullableFilter<"Detalles"> | number | null
    tiempoFuncionamientoBomba?: FloatNullableFilter<"Detalles"> | number | null
    pruebas?: PruebaListRelationFilter
  }

  export type DetallesOrderByWithRelationInput = {
    id?: SortOrder
    esBombaVertical?: SortOrder
    comentario?: SortOrderInput | SortOrder
    correccionManometrica?: SortOrderInput | SortOrder
    presionAtmosferica?: SortOrderInput | SortOrder
    temperaturaAgua?: SortOrderInput | SortOrder
    temperaturaAmbiente?: SortOrderInput | SortOrder
    temperaturaLadoAcoplamiento?: SortOrderInput | SortOrder
    temperaturaLadoBomba?: SortOrderInput | SortOrder
    tiempoFuncionamientoBomba?: SortOrderInput | SortOrder
    pruebas?: PruebaOrderByRelationAggregateInput
  }

  export type DetallesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DetallesWhereInput | DetallesWhereInput[]
    OR?: DetallesWhereInput[]
    NOT?: DetallesWhereInput | DetallesWhereInput[]
    esBombaVertical?: BoolFilter<"Detalles"> | boolean
    comentario?: StringNullableFilter<"Detalles"> | string | null
    correccionManometrica?: FloatNullableFilter<"Detalles"> | number | null
    presionAtmosferica?: FloatNullableFilter<"Detalles"> | number | null
    temperaturaAgua?: FloatNullableFilter<"Detalles"> | number | null
    temperaturaAmbiente?: FloatNullableFilter<"Detalles"> | number | null
    temperaturaLadoAcoplamiento?: FloatNullableFilter<"Detalles"> | number | null
    temperaturaLadoBomba?: FloatNullableFilter<"Detalles"> | number | null
    tiempoFuncionamientoBomba?: FloatNullableFilter<"Detalles"> | number | null
    pruebas?: PruebaListRelationFilter
  }, "id">

  export type DetallesOrderByWithAggregationInput = {
    id?: SortOrder
    esBombaVertical?: SortOrder
    comentario?: SortOrderInput | SortOrder
    correccionManometrica?: SortOrderInput | SortOrder
    presionAtmosferica?: SortOrderInput | SortOrder
    temperaturaAgua?: SortOrderInput | SortOrder
    temperaturaAmbiente?: SortOrderInput | SortOrder
    temperaturaLadoAcoplamiento?: SortOrderInput | SortOrder
    temperaturaLadoBomba?: SortOrderInput | SortOrder
    tiempoFuncionamientoBomba?: SortOrderInput | SortOrder
    _count?: DetallesCountOrderByAggregateInput
    _avg?: DetallesAvgOrderByAggregateInput
    _max?: DetallesMaxOrderByAggregateInput
    _min?: DetallesMinOrderByAggregateInput
    _sum?: DetallesSumOrderByAggregateInput
  }

  export type DetallesScalarWhereWithAggregatesInput = {
    AND?: DetallesScalarWhereWithAggregatesInput | DetallesScalarWhereWithAggregatesInput[]
    OR?: DetallesScalarWhereWithAggregatesInput[]
    NOT?: DetallesScalarWhereWithAggregatesInput | DetallesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Detalles"> | number
    esBombaVertical?: BoolWithAggregatesFilter<"Detalles"> | boolean
    comentario?: StringNullableWithAggregatesFilter<"Detalles"> | string | null
    correccionManometrica?: FloatNullableWithAggregatesFilter<"Detalles"> | number | null
    presionAtmosferica?: FloatNullableWithAggregatesFilter<"Detalles"> | number | null
    temperaturaAgua?: FloatNullableWithAggregatesFilter<"Detalles"> | number | null
    temperaturaAmbiente?: FloatNullableWithAggregatesFilter<"Detalles"> | number | null
    temperaturaLadoAcoplamiento?: FloatNullableWithAggregatesFilter<"Detalles"> | number | null
    temperaturaLadoBomba?: FloatNullableWithAggregatesFilter<"Detalles"> | number | null
    tiempoFuncionamientoBomba?: FloatNullableWithAggregatesFilter<"Detalles"> | number | null
  }

  export type BancoWhereInput = {
    AND?: BancoWhereInput | BancoWhereInput[]
    OR?: BancoWhereInput[]
    NOT?: BancoWhereInput | BancoWhereInput[]
    id?: IntFilter<"Banco"> | number
    nombre?: StringFilter<"Banco"> | string
    estado?: BoolFilter<"Banco"> | boolean
    pruebas?: PruebaListRelationFilter
  }

  export type BancoOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    pruebas?: PruebaOrderByRelationAggregateInput
  }

  export type BancoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BancoWhereInput | BancoWhereInput[]
    OR?: BancoWhereInput[]
    NOT?: BancoWhereInput | BancoWhereInput[]
    nombre?: StringFilter<"Banco"> | string
    estado?: BoolFilter<"Banco"> | boolean
    pruebas?: PruebaListRelationFilter
  }, "id">

  export type BancoOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    _count?: BancoCountOrderByAggregateInput
    _avg?: BancoAvgOrderByAggregateInput
    _max?: BancoMaxOrderByAggregateInput
    _min?: BancoMinOrderByAggregateInput
    _sum?: BancoSumOrderByAggregateInput
  }

  export type BancoScalarWhereWithAggregatesInput = {
    AND?: BancoScalarWhereWithAggregatesInput | BancoScalarWhereWithAggregatesInput[]
    OR?: BancoScalarWhereWithAggregatesInput[]
    NOT?: BancoScalarWhereWithAggregatesInput | BancoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Banco"> | number
    nombre?: StringWithAggregatesFilter<"Banco"> | string
    estado?: BoolWithAggregatesFilter<"Banco"> | boolean
  }

  export type BombaWhereInput = {
    AND?: BombaWhereInput | BombaWhereInput[]
    OR?: BombaWhereInput[]
    NOT?: BombaWhereInput | BombaWhereInput[]
    id?: IntFilter<"Bomba"> | number
    item?: StringNullableFilter<"Bomba"> | string | null
    tipoBomba?: StringNullableFilter<"Bomba"> | string | null
    numeroSerie?: StringNullableFilter<"Bomba"> | string | null
    diametroAspiracion?: FloatNullableFilter<"Bomba"> | number | null
    diametroImpulsion?: FloatNullableFilter<"Bomba"> | number | null
    diametroRodete?: StringNullableFilter<"Bomba"> | string | null
    tipoCierre?: StringNullableFilter<"Bomba"> | string | null
    pruebas?: PruebaListRelationFilter
  }

  export type BombaOrderByWithRelationInput = {
    id?: SortOrder
    item?: SortOrderInput | SortOrder
    tipoBomba?: SortOrderInput | SortOrder
    numeroSerie?: SortOrderInput | SortOrder
    diametroAspiracion?: SortOrderInput | SortOrder
    diametroImpulsion?: SortOrderInput | SortOrder
    diametroRodete?: SortOrderInput | SortOrder
    tipoCierre?: SortOrderInput | SortOrder
    pruebas?: PruebaOrderByRelationAggregateInput
  }

  export type BombaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BombaWhereInput | BombaWhereInput[]
    OR?: BombaWhereInput[]
    NOT?: BombaWhereInput | BombaWhereInput[]
    item?: StringNullableFilter<"Bomba"> | string | null
    tipoBomba?: StringNullableFilter<"Bomba"> | string | null
    numeroSerie?: StringNullableFilter<"Bomba"> | string | null
    diametroAspiracion?: FloatNullableFilter<"Bomba"> | number | null
    diametroImpulsion?: FloatNullableFilter<"Bomba"> | number | null
    diametroRodete?: StringNullableFilter<"Bomba"> | string | null
    tipoCierre?: StringNullableFilter<"Bomba"> | string | null
    pruebas?: PruebaListRelationFilter
  }, "id">

  export type BombaOrderByWithAggregationInput = {
    id?: SortOrder
    item?: SortOrderInput | SortOrder
    tipoBomba?: SortOrderInput | SortOrder
    numeroSerie?: SortOrderInput | SortOrder
    diametroAspiracion?: SortOrderInput | SortOrder
    diametroImpulsion?: SortOrderInput | SortOrder
    diametroRodete?: SortOrderInput | SortOrder
    tipoCierre?: SortOrderInput | SortOrder
    _count?: BombaCountOrderByAggregateInput
    _avg?: BombaAvgOrderByAggregateInput
    _max?: BombaMaxOrderByAggregateInput
    _min?: BombaMinOrderByAggregateInput
    _sum?: BombaSumOrderByAggregateInput
  }

  export type BombaScalarWhereWithAggregatesInput = {
    AND?: BombaScalarWhereWithAggregatesInput | BombaScalarWhereWithAggregatesInput[]
    OR?: BombaScalarWhereWithAggregatesInput[]
    NOT?: BombaScalarWhereWithAggregatesInput | BombaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bomba"> | number
    item?: StringNullableWithAggregatesFilter<"Bomba"> | string | null
    tipoBomba?: StringNullableWithAggregatesFilter<"Bomba"> | string | null
    numeroSerie?: StringNullableWithAggregatesFilter<"Bomba"> | string | null
    diametroAspiracion?: FloatNullableWithAggregatesFilter<"Bomba"> | number | null
    diametroImpulsion?: FloatNullableWithAggregatesFilter<"Bomba"> | number | null
    diametroRodete?: StringNullableWithAggregatesFilter<"Bomba"> | string | null
    tipoCierre?: StringNullableWithAggregatesFilter<"Bomba"> | string | null
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nombre?: StringFilter<"Cliente"> | string
    direccion?: StringNullableFilter<"Cliente"> | string | null
    contacto?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    estado?: BoolFilter<"Cliente"> | boolean
    fechaCreacion?: DateTimeFilter<"Cliente"> | Date | string
    pruebas?: PruebaListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    pruebas?: PruebaOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombre?: StringFilter<"Cliente"> | string
    direccion?: StringNullableFilter<"Cliente"> | string | null
    contacto?: StringNullableFilter<"Cliente"> | string | null
    telefono?: StringNullableFilter<"Cliente"> | string | null
    email?: StringNullableFilter<"Cliente"> | string | null
    estado?: BoolFilter<"Cliente"> | boolean
    fechaCreacion?: DateTimeFilter<"Cliente"> | Date | string
    pruebas?: PruebaListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrderInput | SortOrder
    contacto?: SortOrderInput | SortOrder
    telefono?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nombre?: StringWithAggregatesFilter<"Cliente"> | string
    direccion?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    contacto?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    telefono?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    email?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    estado?: BoolWithAggregatesFilter<"Cliente"> | boolean
    fechaCreacion?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
  }

  export type ParametroWhereInput = {
    AND?: ParametroWhereInput | ParametroWhereInput[]
    OR?: ParametroWhereInput[]
    NOT?: ParametroWhereInput | ParametroWhereInput[]
    id?: IntFilter<"Parametro"> | number
    unidadId?: IntFilter<"Parametro"> | number
    nombre?: StringNullableFilter<"Parametro"> | string | null
    tipoDato?: StringNullableFilter<"Parametro"> | string | null
    obligatorio?: BoolFilter<"Parametro"> | boolean
    activo?: BoolFilter<"Parametro"> | boolean
    unidad?: XOR<UnidadScalarRelationFilter, UnidadWhereInput>
    valores?: PruebaParametroValorListRelationFilter
    continuos?: PruebaParametroContinuoListRelationFilter
  }

  export type ParametroOrderByWithRelationInput = {
    id?: SortOrder
    unidadId?: SortOrder
    nombre?: SortOrderInput | SortOrder
    tipoDato?: SortOrderInput | SortOrder
    obligatorio?: SortOrder
    activo?: SortOrder
    unidad?: UnidadOrderByWithRelationInput
    valores?: PruebaParametroValorOrderByRelationAggregateInput
    continuos?: PruebaParametroContinuoOrderByRelationAggregateInput
  }

  export type ParametroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParametroWhereInput | ParametroWhereInput[]
    OR?: ParametroWhereInput[]
    NOT?: ParametroWhereInput | ParametroWhereInput[]
    unidadId?: IntFilter<"Parametro"> | number
    nombre?: StringNullableFilter<"Parametro"> | string | null
    tipoDato?: StringNullableFilter<"Parametro"> | string | null
    obligatorio?: BoolFilter<"Parametro"> | boolean
    activo?: BoolFilter<"Parametro"> | boolean
    unidad?: XOR<UnidadScalarRelationFilter, UnidadWhereInput>
    valores?: PruebaParametroValorListRelationFilter
    continuos?: PruebaParametroContinuoListRelationFilter
  }, "id">

  export type ParametroOrderByWithAggregationInput = {
    id?: SortOrder
    unidadId?: SortOrder
    nombre?: SortOrderInput | SortOrder
    tipoDato?: SortOrderInput | SortOrder
    obligatorio?: SortOrder
    activo?: SortOrder
    _count?: ParametroCountOrderByAggregateInput
    _avg?: ParametroAvgOrderByAggregateInput
    _max?: ParametroMaxOrderByAggregateInput
    _min?: ParametroMinOrderByAggregateInput
    _sum?: ParametroSumOrderByAggregateInput
  }

  export type ParametroScalarWhereWithAggregatesInput = {
    AND?: ParametroScalarWhereWithAggregatesInput | ParametroScalarWhereWithAggregatesInput[]
    OR?: ParametroScalarWhereWithAggregatesInput[]
    NOT?: ParametroScalarWhereWithAggregatesInput | ParametroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Parametro"> | number
    unidadId?: IntWithAggregatesFilter<"Parametro"> | number
    nombre?: StringNullableWithAggregatesFilter<"Parametro"> | string | null
    tipoDato?: StringNullableWithAggregatesFilter<"Parametro"> | string | null
    obligatorio?: BoolWithAggregatesFilter<"Parametro"> | boolean
    activo?: BoolWithAggregatesFilter<"Parametro"> | boolean
  }

  export type PruebaWhereInput = {
    AND?: PruebaWhereInput | PruebaWhereInput[]
    OR?: PruebaWhereInput[]
    NOT?: PruebaWhereInput | PruebaWhereInput[]
    numeroProtocolo?: IntFilter<"Prueba"> | number
    detallesId?: IntFilter<"Prueba"> | number
    motorId?: IntFilter<"Prueba"> | number
    bombaId?: IntFilter<"Prueba"> | number
    clienteId?: IntFilter<"Prueba"> | number
    bancoId?: IntFilter<"Prueba"> | number
    fecha?: DateTimeFilter<"Prueba"> | Date | string
    detalles?: XOR<DetallesScalarRelationFilter, DetallesWhereInput>
    motor?: XOR<MotorScalarRelationFilter, MotorWhereInput>
    bomba?: XOR<BombaScalarRelationFilter, BombaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    banco?: XOR<BancoScalarRelationFilter, BancoWhereInput>
    valores?: PruebaParametroValorListRelationFilter
    continuos?: PruebaParametroContinuoListRelationFilter
  }

  export type PruebaOrderByWithRelationInput = {
    numeroProtocolo?: SortOrder
    detallesId?: SortOrder
    motorId?: SortOrder
    bombaId?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
    fecha?: SortOrder
    detalles?: DetallesOrderByWithRelationInput
    motor?: MotorOrderByWithRelationInput
    bomba?: BombaOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    banco?: BancoOrderByWithRelationInput
    valores?: PruebaParametroValorOrderByRelationAggregateInput
    continuos?: PruebaParametroContinuoOrderByRelationAggregateInput
  }

  export type PruebaWhereUniqueInput = Prisma.AtLeast<{
    numeroProtocolo?: number
    AND?: PruebaWhereInput | PruebaWhereInput[]
    OR?: PruebaWhereInput[]
    NOT?: PruebaWhereInput | PruebaWhereInput[]
    detallesId?: IntFilter<"Prueba"> | number
    motorId?: IntFilter<"Prueba"> | number
    bombaId?: IntFilter<"Prueba"> | number
    clienteId?: IntFilter<"Prueba"> | number
    bancoId?: IntFilter<"Prueba"> | number
    fecha?: DateTimeFilter<"Prueba"> | Date | string
    detalles?: XOR<DetallesScalarRelationFilter, DetallesWhereInput>
    motor?: XOR<MotorScalarRelationFilter, MotorWhereInput>
    bomba?: XOR<BombaScalarRelationFilter, BombaWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    banco?: XOR<BancoScalarRelationFilter, BancoWhereInput>
    valores?: PruebaParametroValorListRelationFilter
    continuos?: PruebaParametroContinuoListRelationFilter
  }, "numeroProtocolo">

  export type PruebaOrderByWithAggregationInput = {
    numeroProtocolo?: SortOrder
    detallesId?: SortOrder
    motorId?: SortOrder
    bombaId?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
    fecha?: SortOrder
    _count?: PruebaCountOrderByAggregateInput
    _avg?: PruebaAvgOrderByAggregateInput
    _max?: PruebaMaxOrderByAggregateInput
    _min?: PruebaMinOrderByAggregateInput
    _sum?: PruebaSumOrderByAggregateInput
  }

  export type PruebaScalarWhereWithAggregatesInput = {
    AND?: PruebaScalarWhereWithAggregatesInput | PruebaScalarWhereWithAggregatesInput[]
    OR?: PruebaScalarWhereWithAggregatesInput[]
    NOT?: PruebaScalarWhereWithAggregatesInput | PruebaScalarWhereWithAggregatesInput[]
    numeroProtocolo?: IntWithAggregatesFilter<"Prueba"> | number
    detallesId?: IntWithAggregatesFilter<"Prueba"> | number
    motorId?: IntWithAggregatesFilter<"Prueba"> | number
    bombaId?: IntWithAggregatesFilter<"Prueba"> | number
    clienteId?: IntWithAggregatesFilter<"Prueba"> | number
    bancoId?: IntWithAggregatesFilter<"Prueba"> | number
    fecha?: DateTimeWithAggregatesFilter<"Prueba"> | Date | string
  }

  export type PruebaParametroValorWhereInput = {
    AND?: PruebaParametroValorWhereInput | PruebaParametroValorWhereInput[]
    OR?: PruebaParametroValorWhereInput[]
    NOT?: PruebaParametroValorWhereInput | PruebaParametroValorWhereInput[]
    puntoId?: IntFilter<"PruebaParametroValor"> | number
    parametroId?: IntFilter<"PruebaParametroValor"> | number
    numeroProtocolo?: IntFilter<"PruebaParametroValor"> | number
    valorEntero?: IntNullableFilter<"PruebaParametroValor"> | number | null
    valorDecimal?: FloatNullableFilter<"PruebaParametroValor"> | number | null
    valorTexto?: StringNullableFilter<"PruebaParametroValor"> | string | null
    valorFecha?: DateTimeNullableFilter<"PruebaParametroValor"> | Date | string | null
    valorBool?: BoolNullableFilter<"PruebaParametroValor"> | boolean | null
    parametro?: XOR<ParametroScalarRelationFilter, ParametroWhereInput>
    prueba?: XOR<PruebaScalarRelationFilter, PruebaWhereInput>
  }

  export type PruebaParametroValorOrderByWithRelationInput = {
    puntoId?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrderInput | SortOrder
    valorDecimal?: SortOrderInput | SortOrder
    valorTexto?: SortOrderInput | SortOrder
    valorFecha?: SortOrderInput | SortOrder
    valorBool?: SortOrderInput | SortOrder
    parametro?: ParametroOrderByWithRelationInput
    prueba?: PruebaOrderByWithRelationInput
  }

  export type PruebaParametroValorWhereUniqueInput = Prisma.AtLeast<{
    puntoId_parametroId_numeroProtocolo?: PruebaParametroValorPuntoIdParametroIdNumeroProtocoloCompoundUniqueInput
    AND?: PruebaParametroValorWhereInput | PruebaParametroValorWhereInput[]
    OR?: PruebaParametroValorWhereInput[]
    NOT?: PruebaParametroValorWhereInput | PruebaParametroValorWhereInput[]
    puntoId?: IntFilter<"PruebaParametroValor"> | number
    parametroId?: IntFilter<"PruebaParametroValor"> | number
    numeroProtocolo?: IntFilter<"PruebaParametroValor"> | number
    valorEntero?: IntNullableFilter<"PruebaParametroValor"> | number | null
    valorDecimal?: FloatNullableFilter<"PruebaParametroValor"> | number | null
    valorTexto?: StringNullableFilter<"PruebaParametroValor"> | string | null
    valorFecha?: DateTimeNullableFilter<"PruebaParametroValor"> | Date | string | null
    valorBool?: BoolNullableFilter<"PruebaParametroValor"> | boolean | null
    parametro?: XOR<ParametroScalarRelationFilter, ParametroWhereInput>
    prueba?: XOR<PruebaScalarRelationFilter, PruebaWhereInput>
  }, "puntoId_parametroId_numeroProtocolo">

  export type PruebaParametroValorOrderByWithAggregationInput = {
    puntoId?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrderInput | SortOrder
    valorDecimal?: SortOrderInput | SortOrder
    valorTexto?: SortOrderInput | SortOrder
    valorFecha?: SortOrderInput | SortOrder
    valorBool?: SortOrderInput | SortOrder
    _count?: PruebaParametroValorCountOrderByAggregateInput
    _avg?: PruebaParametroValorAvgOrderByAggregateInput
    _max?: PruebaParametroValorMaxOrderByAggregateInput
    _min?: PruebaParametroValorMinOrderByAggregateInput
    _sum?: PruebaParametroValorSumOrderByAggregateInput
  }

  export type PruebaParametroValorScalarWhereWithAggregatesInput = {
    AND?: PruebaParametroValorScalarWhereWithAggregatesInput | PruebaParametroValorScalarWhereWithAggregatesInput[]
    OR?: PruebaParametroValorScalarWhereWithAggregatesInput[]
    NOT?: PruebaParametroValorScalarWhereWithAggregatesInput | PruebaParametroValorScalarWhereWithAggregatesInput[]
    puntoId?: IntWithAggregatesFilter<"PruebaParametroValor"> | number
    parametroId?: IntWithAggregatesFilter<"PruebaParametroValor"> | number
    numeroProtocolo?: IntWithAggregatesFilter<"PruebaParametroValor"> | number
    valorEntero?: IntNullableWithAggregatesFilter<"PruebaParametroValor"> | number | null
    valorDecimal?: FloatNullableWithAggregatesFilter<"PruebaParametroValor"> | number | null
    valorTexto?: StringNullableWithAggregatesFilter<"PruebaParametroValor"> | string | null
    valorFecha?: DateTimeNullableWithAggregatesFilter<"PruebaParametroValor"> | Date | string | null
    valorBool?: BoolNullableWithAggregatesFilter<"PruebaParametroValor"> | boolean | null
  }

  export type PruebaParametroContinuoWhereInput = {
    AND?: PruebaParametroContinuoWhereInput | PruebaParametroContinuoWhereInput[]
    OR?: PruebaParametroContinuoWhereInput[]
    NOT?: PruebaParametroContinuoWhereInput | PruebaParametroContinuoWhereInput[]
    fechaHora?: DateTimeFilter<"PruebaParametroContinuo"> | Date | string
    parametroId?: IntFilter<"PruebaParametroContinuo"> | number
    numeroProtocolo?: IntFilter<"PruebaParametroContinuo"> | number
    valorEntero?: IntNullableFilter<"PruebaParametroContinuo"> | number | null
    valorDecimal?: FloatNullableFilter<"PruebaParametroContinuo"> | number | null
    valorTexto?: StringNullableFilter<"PruebaParametroContinuo"> | string | null
    valorFecha?: DateTimeNullableFilter<"PruebaParametroContinuo"> | Date | string | null
    valorBool?: BoolNullableFilter<"PruebaParametroContinuo"> | boolean | null
    parametro?: XOR<ParametroScalarRelationFilter, ParametroWhereInput>
    prueba?: XOR<PruebaScalarRelationFilter, PruebaWhereInput>
  }

  export type PruebaParametroContinuoOrderByWithRelationInput = {
    fechaHora?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrderInput | SortOrder
    valorDecimal?: SortOrderInput | SortOrder
    valorTexto?: SortOrderInput | SortOrder
    valorFecha?: SortOrderInput | SortOrder
    valorBool?: SortOrderInput | SortOrder
    parametro?: ParametroOrderByWithRelationInput
    prueba?: PruebaOrderByWithRelationInput
  }

  export type PruebaParametroContinuoWhereUniqueInput = Prisma.AtLeast<{
    numeroProtocolo_parametroId_fechaHora?: PruebaParametroContinuoNumeroProtocoloParametroIdFechaHoraCompoundUniqueInput
    AND?: PruebaParametroContinuoWhereInput | PruebaParametroContinuoWhereInput[]
    OR?: PruebaParametroContinuoWhereInput[]
    NOT?: PruebaParametroContinuoWhereInput | PruebaParametroContinuoWhereInput[]
    fechaHora?: DateTimeFilter<"PruebaParametroContinuo"> | Date | string
    parametroId?: IntFilter<"PruebaParametroContinuo"> | number
    numeroProtocolo?: IntFilter<"PruebaParametroContinuo"> | number
    valorEntero?: IntNullableFilter<"PruebaParametroContinuo"> | number | null
    valorDecimal?: FloatNullableFilter<"PruebaParametroContinuo"> | number | null
    valorTexto?: StringNullableFilter<"PruebaParametroContinuo"> | string | null
    valorFecha?: DateTimeNullableFilter<"PruebaParametroContinuo"> | Date | string | null
    valorBool?: BoolNullableFilter<"PruebaParametroContinuo"> | boolean | null
    parametro?: XOR<ParametroScalarRelationFilter, ParametroWhereInput>
    prueba?: XOR<PruebaScalarRelationFilter, PruebaWhereInput>
  }, "numeroProtocolo_parametroId_fechaHora">

  export type PruebaParametroContinuoOrderByWithAggregationInput = {
    fechaHora?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrderInput | SortOrder
    valorDecimal?: SortOrderInput | SortOrder
    valorTexto?: SortOrderInput | SortOrder
    valorFecha?: SortOrderInput | SortOrder
    valorBool?: SortOrderInput | SortOrder
    _count?: PruebaParametroContinuoCountOrderByAggregateInput
    _avg?: PruebaParametroContinuoAvgOrderByAggregateInput
    _max?: PruebaParametroContinuoMaxOrderByAggregateInput
    _min?: PruebaParametroContinuoMinOrderByAggregateInput
    _sum?: PruebaParametroContinuoSumOrderByAggregateInput
  }

  export type PruebaParametroContinuoScalarWhereWithAggregatesInput = {
    AND?: PruebaParametroContinuoScalarWhereWithAggregatesInput | PruebaParametroContinuoScalarWhereWithAggregatesInput[]
    OR?: PruebaParametroContinuoScalarWhereWithAggregatesInput[]
    NOT?: PruebaParametroContinuoScalarWhereWithAggregatesInput | PruebaParametroContinuoScalarWhereWithAggregatesInput[]
    fechaHora?: DateTimeWithAggregatesFilter<"PruebaParametroContinuo"> | Date | string
    parametroId?: IntWithAggregatesFilter<"PruebaParametroContinuo"> | number
    numeroProtocolo?: IntWithAggregatesFilter<"PruebaParametroContinuo"> | number
    valorEntero?: IntNullableWithAggregatesFilter<"PruebaParametroContinuo"> | number | null
    valorDecimal?: FloatNullableWithAggregatesFilter<"PruebaParametroContinuo"> | number | null
    valorTexto?: StringNullableWithAggregatesFilter<"PruebaParametroContinuo"> | string | null
    valorFecha?: DateTimeNullableWithAggregatesFilter<"PruebaParametroContinuo"> | Date | string | null
    valorBool?: BoolNullableWithAggregatesFilter<"PruebaParametroContinuo"> | boolean | null
  }

  export type PedidoImportadoWhereInput = {
    AND?: PedidoImportadoWhereInput | PedidoImportadoWhereInput[]
    OR?: PedidoImportadoWhereInput[]
    NOT?: PedidoImportadoWhereInput | PedidoImportadoWhereInput[]
    id?: IntFilter<"PedidoImportado"> | number
    pedido?: StringFilter<"PedidoImportado"> | string
    posicion?: StringFilter<"PedidoImportado"> | string
    modeloBomba?: StringFilter<"PedidoImportado"> | string
    ordenTrabajo?: StringFilter<"PedidoImportado"> | string
    cliente?: StringFilter<"PedidoImportado"> | string
    item?: StringNullableFilter<"PedidoImportado"> | string | null
    pedidoCliente?: StringNullableFilter<"PedidoImportado"> | string | null
    numeroBombas?: IntFilter<"PedidoImportado"> | number
    fechaImportacion?: DateTimeFilter<"PedidoImportado"> | Date | string
    procesado?: BoolFilter<"PedidoImportado"> | boolean
  }

  export type PedidoImportadoOrderByWithRelationInput = {
    id?: SortOrder
    pedido?: SortOrder
    posicion?: SortOrder
    modeloBomba?: SortOrder
    ordenTrabajo?: SortOrder
    cliente?: SortOrder
    item?: SortOrderInput | SortOrder
    pedidoCliente?: SortOrderInput | SortOrder
    numeroBombas?: SortOrder
    fechaImportacion?: SortOrder
    procesado?: SortOrder
  }

  export type PedidoImportadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoImportadoWhereInput | PedidoImportadoWhereInput[]
    OR?: PedidoImportadoWhereInput[]
    NOT?: PedidoImportadoWhereInput | PedidoImportadoWhereInput[]
    pedido?: StringFilter<"PedidoImportado"> | string
    posicion?: StringFilter<"PedidoImportado"> | string
    modeloBomba?: StringFilter<"PedidoImportado"> | string
    ordenTrabajo?: StringFilter<"PedidoImportado"> | string
    cliente?: StringFilter<"PedidoImportado"> | string
    item?: StringNullableFilter<"PedidoImportado"> | string | null
    pedidoCliente?: StringNullableFilter<"PedidoImportado"> | string | null
    numeroBombas?: IntFilter<"PedidoImportado"> | number
    fechaImportacion?: DateTimeFilter<"PedidoImportado"> | Date | string
    procesado?: BoolFilter<"PedidoImportado"> | boolean
  }, "id">

  export type PedidoImportadoOrderByWithAggregationInput = {
    id?: SortOrder
    pedido?: SortOrder
    posicion?: SortOrder
    modeloBomba?: SortOrder
    ordenTrabajo?: SortOrder
    cliente?: SortOrder
    item?: SortOrderInput | SortOrder
    pedidoCliente?: SortOrderInput | SortOrder
    numeroBombas?: SortOrder
    fechaImportacion?: SortOrder
    procesado?: SortOrder
    _count?: PedidoImportadoCountOrderByAggregateInput
    _avg?: PedidoImportadoAvgOrderByAggregateInput
    _max?: PedidoImportadoMaxOrderByAggregateInput
    _min?: PedidoImportadoMinOrderByAggregateInput
    _sum?: PedidoImportadoSumOrderByAggregateInput
  }

  export type PedidoImportadoScalarWhereWithAggregatesInput = {
    AND?: PedidoImportadoScalarWhereWithAggregatesInput | PedidoImportadoScalarWhereWithAggregatesInput[]
    OR?: PedidoImportadoScalarWhereWithAggregatesInput[]
    NOT?: PedidoImportadoScalarWhereWithAggregatesInput | PedidoImportadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PedidoImportado"> | number
    pedido?: StringWithAggregatesFilter<"PedidoImportado"> | string
    posicion?: StringWithAggregatesFilter<"PedidoImportado"> | string
    modeloBomba?: StringWithAggregatesFilter<"PedidoImportado"> | string
    ordenTrabajo?: StringWithAggregatesFilter<"PedidoImportado"> | string
    cliente?: StringWithAggregatesFilter<"PedidoImportado"> | string
    item?: StringNullableWithAggregatesFilter<"PedidoImportado"> | string | null
    pedidoCliente?: StringNullableWithAggregatesFilter<"PedidoImportado"> | string | null
    numeroBombas?: IntWithAggregatesFilter<"PedidoImportado"> | number
    fechaImportacion?: DateTimeWithAggregatesFilter<"PedidoImportado"> | Date | string
    procesado?: BoolWithAggregatesFilter<"PedidoImportado"> | boolean
  }

  export type FluidoCreateInput = {
    nombre: string
    temperatura?: number | null
    viscosidad?: number | null
    densidad?: number | null
    caudal?: number | null
    altura?: number | null
    velocidad?: number | null
    potencia?: number | null
    rendimiento?: number | null
    caudalCoeficiente?: number | null
    alturaCoeficiente?: number | null
    rendimientoCoeficiente?: number | null
    npshRequerido?: number | null
  }

  export type FluidoUncheckedCreateInput = {
    id?: number
    nombre: string
    temperatura?: number | null
    viscosidad?: number | null
    densidad?: number | null
    caudal?: number | null
    altura?: number | null
    velocidad?: number | null
    potencia?: number | null
    rendimiento?: number | null
    caudalCoeficiente?: number | null
    alturaCoeficiente?: number | null
    rendimientoCoeficiente?: number | null
    npshRequerido?: number | null
  }

  export type FluidoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    temperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    viscosidad?: NullableFloatFieldUpdateOperationsInput | number | null
    densidad?: NullableFloatFieldUpdateOperationsInput | number | null
    caudal?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento?: NullableFloatFieldUpdateOperationsInput | number | null
    caudalCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    alturaCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimientoCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    npshRequerido?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FluidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    temperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    viscosidad?: NullableFloatFieldUpdateOperationsInput | number | null
    densidad?: NullableFloatFieldUpdateOperationsInput | number | null
    caudal?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento?: NullableFloatFieldUpdateOperationsInput | number | null
    caudalCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    alturaCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimientoCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    npshRequerido?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FluidoCreateManyInput = {
    id?: number
    nombre: string
    temperatura?: number | null
    viscosidad?: number | null
    densidad?: number | null
    caudal?: number | null
    altura?: number | null
    velocidad?: number | null
    potencia?: number | null
    rendimiento?: number | null
    caudalCoeficiente?: number | null
    alturaCoeficiente?: number | null
    rendimientoCoeficiente?: number | null
    npshRequerido?: number | null
  }

  export type FluidoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    temperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    viscosidad?: NullableFloatFieldUpdateOperationsInput | number | null
    densidad?: NullableFloatFieldUpdateOperationsInput | number | null
    caudal?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento?: NullableFloatFieldUpdateOperationsInput | number | null
    caudalCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    alturaCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimientoCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    npshRequerido?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FluidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    temperatura?: NullableFloatFieldUpdateOperationsInput | number | null
    viscosidad?: NullableFloatFieldUpdateOperationsInput | number | null
    densidad?: NullableFloatFieldUpdateOperationsInput | number | null
    caudal?: NullableFloatFieldUpdateOperationsInput | number | null
    altura?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento?: NullableFloatFieldUpdateOperationsInput | number | null
    caudalCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    alturaCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimientoCoeficiente?: NullableFloatFieldUpdateOperationsInput | number | null
    npshRequerido?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type UnidadCreateInput = {
    nombre: string
    parametros?: ParametroCreateNestedManyWithoutUnidadInput
  }

  export type UnidadUncheckedCreateInput = {
    id?: number
    nombre: string
    parametros?: ParametroUncheckedCreateNestedManyWithoutUnidadInput
  }

  export type UnidadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    parametros?: ParametroUpdateManyWithoutUnidadNestedInput
  }

  export type UnidadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    parametros?: ParametroUncheckedUpdateManyWithoutUnidadNestedInput
  }

  export type UnidadCreateManyInput = {
    id?: number
    nombre: string
  }

  export type UnidadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type MotorCreateInput = {
    marca?: string | null
    tipo?: string | null
    potencia?: number | null
    velocidad?: number | null
    intensidad?: number | null
    rendimiento25?: number | null
    rendimiento50?: number | null
    rendimiento75?: number | null
    rendimiento100?: number | null
    rendimiento125?: number | null
    estado?: boolean
    pruebas?: PruebaCreateNestedManyWithoutMotorInput
  }

  export type MotorUncheckedCreateInput = {
    id?: number
    marca?: string | null
    tipo?: string | null
    potencia?: number | null
    velocidad?: number | null
    intensidad?: number | null
    rendimiento25?: number | null
    rendimiento50?: number | null
    rendimiento75?: number | null
    rendimiento100?: number | null
    rendimiento125?: number | null
    estado?: boolean
    pruebas?: PruebaUncheckedCreateNestedManyWithoutMotorInput
  }

  export type MotorUpdateInput = {
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    intensidad?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento25?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento50?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento75?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento100?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento125?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    pruebas?: PruebaUpdateManyWithoutMotorNestedInput
  }

  export type MotorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    intensidad?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento25?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento50?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento75?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento100?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento125?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    pruebas?: PruebaUncheckedUpdateManyWithoutMotorNestedInput
  }

  export type MotorCreateManyInput = {
    id?: number
    marca?: string | null
    tipo?: string | null
    potencia?: number | null
    velocidad?: number | null
    intensidad?: number | null
    rendimiento25?: number | null
    rendimiento50?: number | null
    rendimiento75?: number | null
    rendimiento100?: number | null
    rendimiento125?: number | null
    estado?: boolean
  }

  export type MotorUpdateManyMutationInput = {
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    intensidad?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento25?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento50?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento75?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento100?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento125?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MotorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    intensidad?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento25?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento50?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento75?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento100?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento125?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DetallesCreateInput = {
    esBombaVertical?: boolean
    comentario?: string | null
    correccionManometrica?: number | null
    presionAtmosferica?: number | null
    temperaturaAgua?: number | null
    temperaturaAmbiente?: number | null
    temperaturaLadoAcoplamiento?: number | null
    temperaturaLadoBomba?: number | null
    tiempoFuncionamientoBomba?: number | null
    pruebas?: PruebaCreateNestedManyWithoutDetallesInput
  }

  export type DetallesUncheckedCreateInput = {
    id?: number
    esBombaVertical?: boolean
    comentario?: string | null
    correccionManometrica?: number | null
    presionAtmosferica?: number | null
    temperaturaAgua?: number | null
    temperaturaAmbiente?: number | null
    temperaturaLadoAcoplamiento?: number | null
    temperaturaLadoBomba?: number | null
    tiempoFuncionamientoBomba?: number | null
    pruebas?: PruebaUncheckedCreateNestedManyWithoutDetallesInput
  }

  export type DetallesUpdateInput = {
    esBombaVertical?: BoolFieldUpdateOperationsInput | boolean
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    correccionManometrica?: NullableFloatFieldUpdateOperationsInput | number | null
    presionAtmosferica?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAgua?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAmbiente?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoAcoplamiento?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
    tiempoFuncionamientoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
    pruebas?: PruebaUpdateManyWithoutDetallesNestedInput
  }

  export type DetallesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    esBombaVertical?: BoolFieldUpdateOperationsInput | boolean
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    correccionManometrica?: NullableFloatFieldUpdateOperationsInput | number | null
    presionAtmosferica?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAgua?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAmbiente?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoAcoplamiento?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
    tiempoFuncionamientoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
    pruebas?: PruebaUncheckedUpdateManyWithoutDetallesNestedInput
  }

  export type DetallesCreateManyInput = {
    id?: number
    esBombaVertical?: boolean
    comentario?: string | null
    correccionManometrica?: number | null
    presionAtmosferica?: number | null
    temperaturaAgua?: number | null
    temperaturaAmbiente?: number | null
    temperaturaLadoAcoplamiento?: number | null
    temperaturaLadoBomba?: number | null
    tiempoFuncionamientoBomba?: number | null
  }

  export type DetallesUpdateManyMutationInput = {
    esBombaVertical?: BoolFieldUpdateOperationsInput | boolean
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    correccionManometrica?: NullableFloatFieldUpdateOperationsInput | number | null
    presionAtmosferica?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAgua?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAmbiente?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoAcoplamiento?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
    tiempoFuncionamientoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DetallesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    esBombaVertical?: BoolFieldUpdateOperationsInput | boolean
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    correccionManometrica?: NullableFloatFieldUpdateOperationsInput | number | null
    presionAtmosferica?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAgua?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAmbiente?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoAcoplamiento?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
    tiempoFuncionamientoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BancoCreateInput = {
    nombre: string
    estado?: boolean
    pruebas?: PruebaCreateNestedManyWithoutBancoInput
  }

  export type BancoUncheckedCreateInput = {
    id?: number
    nombre: string
    estado?: boolean
    pruebas?: PruebaUncheckedCreateNestedManyWithoutBancoInput
  }

  export type BancoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    pruebas?: PruebaUpdateManyWithoutBancoNestedInput
  }

  export type BancoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    pruebas?: PruebaUncheckedUpdateManyWithoutBancoNestedInput
  }

  export type BancoCreateManyInput = {
    id?: number
    nombre: string
    estado?: boolean
  }

  export type BancoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BancoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BombaCreateInput = {
    item?: string | null
    tipoBomba?: string | null
    numeroSerie?: string | null
    diametroAspiracion?: number | null
    diametroImpulsion?: number | null
    diametroRodete?: string | null
    tipoCierre?: string | null
    pruebas?: PruebaCreateNestedManyWithoutBombaInput
  }

  export type BombaUncheckedCreateInput = {
    id?: number
    item?: string | null
    tipoBomba?: string | null
    numeroSerie?: string | null
    diametroAspiracion?: number | null
    diametroImpulsion?: number | null
    diametroRodete?: string | null
    tipoCierre?: string | null
    pruebas?: PruebaUncheckedCreateNestedManyWithoutBombaInput
  }

  export type BombaUpdateInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    tipoBomba?: NullableStringFieldUpdateOperationsInput | string | null
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    diametroAspiracion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroImpulsion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroRodete?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCierre?: NullableStringFieldUpdateOperationsInput | string | null
    pruebas?: PruebaUpdateManyWithoutBombaNestedInput
  }

  export type BombaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
    tipoBomba?: NullableStringFieldUpdateOperationsInput | string | null
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    diametroAspiracion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroImpulsion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroRodete?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCierre?: NullableStringFieldUpdateOperationsInput | string | null
    pruebas?: PruebaUncheckedUpdateManyWithoutBombaNestedInput
  }

  export type BombaCreateManyInput = {
    id?: number
    item?: string | null
    tipoBomba?: string | null
    numeroSerie?: string | null
    diametroAspiracion?: number | null
    diametroImpulsion?: number | null
    diametroRodete?: string | null
    tipoCierre?: string | null
  }

  export type BombaUpdateManyMutationInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    tipoBomba?: NullableStringFieldUpdateOperationsInput | string | null
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    diametroAspiracion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroImpulsion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroRodete?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCierre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BombaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
    tipoBomba?: NullableStringFieldUpdateOperationsInput | string | null
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    diametroAspiracion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroImpulsion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroRodete?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCierre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteCreateInput = {
    nombre: string
    direccion?: string | null
    contacto?: string | null
    telefono?: string | null
    email?: string | null
    estado?: boolean
    fechaCreacion?: Date | string
    pruebas?: PruebaCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nombre: string
    direccion?: string | null
    contacto?: string | null
    telefono?: string | null
    email?: string | null
    estado?: boolean
    fechaCreacion?: Date | string
    pruebas?: PruebaUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    pruebas?: PruebaUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
    pruebas?: PruebaUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nombre: string
    direccion?: string | null
    contacto?: string | null
    telefono?: string | null
    email?: string | null
    estado?: boolean
    fechaCreacion?: Date | string
  }

  export type ClienteUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParametroCreateInput = {
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
    unidad: UnidadCreateNestedOneWithoutParametrosInput
    valores?: PruebaParametroValorCreateNestedManyWithoutParametroInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutParametroInput
  }

  export type ParametroUncheckedCreateInput = {
    id?: number
    unidadId: number
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutParametroInput
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutParametroInput
  }

  export type ParametroUpdateInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    unidad?: UnidadUpdateOneRequiredWithoutParametrosNestedInput
    valores?: PruebaParametroValorUpdateManyWithoutParametroNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutParametroNestedInput
  }

  export type ParametroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutParametroNestedInput
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutParametroNestedInput
  }

  export type ParametroCreateManyInput = {
    id?: number
    unidadId: number
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
  }

  export type ParametroUpdateManyMutationInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ParametroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PruebaCreateInput = {
    fecha?: Date | string
    detalles: DetallesCreateNestedOneWithoutPruebasInput
    motor: MotorCreateNestedOneWithoutPruebasInput
    bomba: BombaCreateNestedOneWithoutPruebasInput
    cliente: ClienteCreateNestedOneWithoutPruebasInput
    banco: BancoCreateNestedOneWithoutPruebasInput
    valores?: PruebaParametroValorCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutPruebaInput
  }

  export type PruebaUncheckedCreateInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutPruebaInput
  }

  export type PruebaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetallesUpdateOneRequiredWithoutPruebasNestedInput
    motor?: MotorUpdateOneRequiredWithoutPruebasNestedInput
    bomba?: BombaUpdateOneRequiredWithoutPruebasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPruebasNestedInput
    banco?: BancoUpdateOneRequiredWithoutPruebasNestedInput
    valores?: PruebaParametroValorUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaCreateManyInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
  }

  export type PruebaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PruebaUncheckedUpdateManyInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PruebaParametroValorCreateInput = {
    puntoId: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
    parametro: ParametroCreateNestedOneWithoutValoresInput
    prueba: PruebaCreateNestedOneWithoutValoresInput
  }

  export type PruebaParametroValorUncheckedCreateInput = {
    puntoId: number
    parametroId: number
    numeroProtocolo: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroValorUpdateInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parametro?: ParametroUpdateOneRequiredWithoutValoresNestedInput
    prueba?: PruebaUpdateOneRequiredWithoutValoresNestedInput
  }

  export type PruebaParametroValorUncheckedUpdateInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    parametroId?: IntFieldUpdateOperationsInput | number
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroValorCreateManyInput = {
    puntoId: number
    parametroId: number
    numeroProtocolo: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroValorUpdateManyMutationInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroValorUncheckedUpdateManyInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    parametroId?: IntFieldUpdateOperationsInput | number
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroContinuoCreateInput = {
    fechaHora: Date | string
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
    parametro: ParametroCreateNestedOneWithoutContinuosInput
    prueba: PruebaCreateNestedOneWithoutContinuosInput
  }

  export type PruebaParametroContinuoUncheckedCreateInput = {
    fechaHora: Date | string
    parametroId: number
    numeroProtocolo: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroContinuoUpdateInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parametro?: ParametroUpdateOneRequiredWithoutContinuosNestedInput
    prueba?: PruebaUpdateOneRequiredWithoutContinuosNestedInput
  }

  export type PruebaParametroContinuoUncheckedUpdateInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    parametroId?: IntFieldUpdateOperationsInput | number
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroContinuoCreateManyInput = {
    fechaHora: Date | string
    parametroId: number
    numeroProtocolo: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroContinuoUpdateManyMutationInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroContinuoUncheckedUpdateManyInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    parametroId?: IntFieldUpdateOperationsInput | number
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PedidoImportadoCreateInput = {
    pedido: string
    posicion: string
    modeloBomba: string
    ordenTrabajo: string
    cliente: string
    item?: string | null
    pedidoCliente?: string | null
    numeroBombas?: number
    fechaImportacion?: Date | string
    procesado?: boolean
  }

  export type PedidoImportadoUncheckedCreateInput = {
    id?: number
    pedido: string
    posicion: string
    modeloBomba: string
    ordenTrabajo: string
    cliente: string
    item?: string | null
    pedidoCliente?: string | null
    numeroBombas?: number
    fechaImportacion?: Date | string
    procesado?: boolean
  }

  export type PedidoImportadoUpdateInput = {
    pedido?: StringFieldUpdateOperationsInput | string
    posicion?: StringFieldUpdateOperationsInput | string
    modeloBomba?: StringFieldUpdateOperationsInput | string
    ordenTrabajo?: StringFieldUpdateOperationsInput | string
    cliente?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroBombas?: IntFieldUpdateOperationsInput | number
    fechaImportacion?: DateTimeFieldUpdateOperationsInput | Date | string
    procesado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PedidoImportadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido?: StringFieldUpdateOperationsInput | string
    posicion?: StringFieldUpdateOperationsInput | string
    modeloBomba?: StringFieldUpdateOperationsInput | string
    ordenTrabajo?: StringFieldUpdateOperationsInput | string
    cliente?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroBombas?: IntFieldUpdateOperationsInput | number
    fechaImportacion?: DateTimeFieldUpdateOperationsInput | Date | string
    procesado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PedidoImportadoCreateManyInput = {
    id?: number
    pedido: string
    posicion: string
    modeloBomba: string
    ordenTrabajo: string
    cliente: string
    item?: string | null
    pedidoCliente?: string | null
    numeroBombas?: number
    fechaImportacion?: Date | string
    procesado?: boolean
  }

  export type PedidoImportadoUpdateManyMutationInput = {
    pedido?: StringFieldUpdateOperationsInput | string
    posicion?: StringFieldUpdateOperationsInput | string
    modeloBomba?: StringFieldUpdateOperationsInput | string
    ordenTrabajo?: StringFieldUpdateOperationsInput | string
    cliente?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroBombas?: IntFieldUpdateOperationsInput | number
    fechaImportacion?: DateTimeFieldUpdateOperationsInput | Date | string
    procesado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PedidoImportadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedido?: StringFieldUpdateOperationsInput | string
    posicion?: StringFieldUpdateOperationsInput | string
    modeloBomba?: StringFieldUpdateOperationsInput | string
    ordenTrabajo?: StringFieldUpdateOperationsInput | string
    cliente?: StringFieldUpdateOperationsInput | string
    item?: NullableStringFieldUpdateOperationsInput | string | null
    pedidoCliente?: NullableStringFieldUpdateOperationsInput | string | null
    numeroBombas?: IntFieldUpdateOperationsInput | number
    fechaImportacion?: DateTimeFieldUpdateOperationsInput | Date | string
    procesado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FluidoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    temperatura?: SortOrder
    viscosidad?: SortOrder
    densidad?: SortOrder
    caudal?: SortOrder
    altura?: SortOrder
    velocidad?: SortOrder
    potencia?: SortOrder
    rendimiento?: SortOrder
    caudalCoeficiente?: SortOrder
    alturaCoeficiente?: SortOrder
    rendimientoCoeficiente?: SortOrder
    npshRequerido?: SortOrder
  }

  export type FluidoAvgOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    viscosidad?: SortOrder
    densidad?: SortOrder
    caudal?: SortOrder
    altura?: SortOrder
    velocidad?: SortOrder
    potencia?: SortOrder
    rendimiento?: SortOrder
    caudalCoeficiente?: SortOrder
    alturaCoeficiente?: SortOrder
    rendimientoCoeficiente?: SortOrder
    npshRequerido?: SortOrder
  }

  export type FluidoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    temperatura?: SortOrder
    viscosidad?: SortOrder
    densidad?: SortOrder
    caudal?: SortOrder
    altura?: SortOrder
    velocidad?: SortOrder
    potencia?: SortOrder
    rendimiento?: SortOrder
    caudalCoeficiente?: SortOrder
    alturaCoeficiente?: SortOrder
    rendimientoCoeficiente?: SortOrder
    npshRequerido?: SortOrder
  }

  export type FluidoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    temperatura?: SortOrder
    viscosidad?: SortOrder
    densidad?: SortOrder
    caudal?: SortOrder
    altura?: SortOrder
    velocidad?: SortOrder
    potencia?: SortOrder
    rendimiento?: SortOrder
    caudalCoeficiente?: SortOrder
    alturaCoeficiente?: SortOrder
    rendimientoCoeficiente?: SortOrder
    npshRequerido?: SortOrder
  }

  export type FluidoSumOrderByAggregateInput = {
    id?: SortOrder
    temperatura?: SortOrder
    viscosidad?: SortOrder
    densidad?: SortOrder
    caudal?: SortOrder
    altura?: SortOrder
    velocidad?: SortOrder
    potencia?: SortOrder
    rendimiento?: SortOrder
    caudalCoeficiente?: SortOrder
    alturaCoeficiente?: SortOrder
    rendimientoCoeficiente?: SortOrder
    npshRequerido?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type ParametroListRelationFilter = {
    every?: ParametroWhereInput
    some?: ParametroWhereInput
    none?: ParametroWhereInput
  }

  export type ParametroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnidadCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type UnidadAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UnidadMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type UnidadMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type UnidadSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PruebaListRelationFilter = {
    every?: PruebaWhereInput
    some?: PruebaWhereInput
    none?: PruebaWhereInput
  }

  export type PruebaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MotorCountOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    potencia?: SortOrder
    velocidad?: SortOrder
    intensidad?: SortOrder
    rendimiento25?: SortOrder
    rendimiento50?: SortOrder
    rendimiento75?: SortOrder
    rendimiento100?: SortOrder
    rendimiento125?: SortOrder
    estado?: SortOrder
  }

  export type MotorAvgOrderByAggregateInput = {
    id?: SortOrder
    potencia?: SortOrder
    velocidad?: SortOrder
    intensidad?: SortOrder
    rendimiento25?: SortOrder
    rendimiento50?: SortOrder
    rendimiento75?: SortOrder
    rendimiento100?: SortOrder
    rendimiento125?: SortOrder
  }

  export type MotorMaxOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    potencia?: SortOrder
    velocidad?: SortOrder
    intensidad?: SortOrder
    rendimiento25?: SortOrder
    rendimiento50?: SortOrder
    rendimiento75?: SortOrder
    rendimiento100?: SortOrder
    rendimiento125?: SortOrder
    estado?: SortOrder
  }

  export type MotorMinOrderByAggregateInput = {
    id?: SortOrder
    marca?: SortOrder
    tipo?: SortOrder
    potencia?: SortOrder
    velocidad?: SortOrder
    intensidad?: SortOrder
    rendimiento25?: SortOrder
    rendimiento50?: SortOrder
    rendimiento75?: SortOrder
    rendimiento100?: SortOrder
    rendimiento125?: SortOrder
    estado?: SortOrder
  }

  export type MotorSumOrderByAggregateInput = {
    id?: SortOrder
    potencia?: SortOrder
    velocidad?: SortOrder
    intensidad?: SortOrder
    rendimiento25?: SortOrder
    rendimiento50?: SortOrder
    rendimiento75?: SortOrder
    rendimiento100?: SortOrder
    rendimiento125?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DetallesCountOrderByAggregateInput = {
    id?: SortOrder
    esBombaVertical?: SortOrder
    comentario?: SortOrder
    correccionManometrica?: SortOrder
    presionAtmosferica?: SortOrder
    temperaturaAgua?: SortOrder
    temperaturaAmbiente?: SortOrder
    temperaturaLadoAcoplamiento?: SortOrder
    temperaturaLadoBomba?: SortOrder
    tiempoFuncionamientoBomba?: SortOrder
  }

  export type DetallesAvgOrderByAggregateInput = {
    id?: SortOrder
    correccionManometrica?: SortOrder
    presionAtmosferica?: SortOrder
    temperaturaAgua?: SortOrder
    temperaturaAmbiente?: SortOrder
    temperaturaLadoAcoplamiento?: SortOrder
    temperaturaLadoBomba?: SortOrder
    tiempoFuncionamientoBomba?: SortOrder
  }

  export type DetallesMaxOrderByAggregateInput = {
    id?: SortOrder
    esBombaVertical?: SortOrder
    comentario?: SortOrder
    correccionManometrica?: SortOrder
    presionAtmosferica?: SortOrder
    temperaturaAgua?: SortOrder
    temperaturaAmbiente?: SortOrder
    temperaturaLadoAcoplamiento?: SortOrder
    temperaturaLadoBomba?: SortOrder
    tiempoFuncionamientoBomba?: SortOrder
  }

  export type DetallesMinOrderByAggregateInput = {
    id?: SortOrder
    esBombaVertical?: SortOrder
    comentario?: SortOrder
    correccionManometrica?: SortOrder
    presionAtmosferica?: SortOrder
    temperaturaAgua?: SortOrder
    temperaturaAmbiente?: SortOrder
    temperaturaLadoAcoplamiento?: SortOrder
    temperaturaLadoBomba?: SortOrder
    tiempoFuncionamientoBomba?: SortOrder
  }

  export type DetallesSumOrderByAggregateInput = {
    id?: SortOrder
    correccionManometrica?: SortOrder
    presionAtmosferica?: SortOrder
    temperaturaAgua?: SortOrder
    temperaturaAmbiente?: SortOrder
    temperaturaLadoAcoplamiento?: SortOrder
    temperaturaLadoBomba?: SortOrder
    tiempoFuncionamientoBomba?: SortOrder
  }

  export type BancoCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type BancoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BancoMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type BancoMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
  }

  export type BancoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BombaCountOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    tipoBomba?: SortOrder
    numeroSerie?: SortOrder
    diametroAspiracion?: SortOrder
    diametroImpulsion?: SortOrder
    diametroRodete?: SortOrder
    tipoCierre?: SortOrder
  }

  export type BombaAvgOrderByAggregateInput = {
    id?: SortOrder
    diametroAspiracion?: SortOrder
    diametroImpulsion?: SortOrder
  }

  export type BombaMaxOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    tipoBomba?: SortOrder
    numeroSerie?: SortOrder
    diametroAspiracion?: SortOrder
    diametroImpulsion?: SortOrder
    diametroRodete?: SortOrder
    tipoCierre?: SortOrder
  }

  export type BombaMinOrderByAggregateInput = {
    id?: SortOrder
    item?: SortOrder
    tipoBomba?: SortOrder
    numeroSerie?: SortOrder
    diametroAspiracion?: SortOrder
    diametroImpulsion?: SortOrder
    diametroRodete?: SortOrder
    tipoCierre?: SortOrder
  }

  export type BombaSumOrderByAggregateInput = {
    id?: SortOrder
    diametroAspiracion?: SortOrder
    diametroImpulsion?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    contacto?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    contacto?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    contacto?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    estado?: SortOrder
    fechaCreacion?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UnidadScalarRelationFilter = {
    is?: UnidadWhereInput
    isNot?: UnidadWhereInput
  }

  export type PruebaParametroValorListRelationFilter = {
    every?: PruebaParametroValorWhereInput
    some?: PruebaParametroValorWhereInput
    none?: PruebaParametroValorWhereInput
  }

  export type PruebaParametroContinuoListRelationFilter = {
    every?: PruebaParametroContinuoWhereInput
    some?: PruebaParametroContinuoWhereInput
    none?: PruebaParametroContinuoWhereInput
  }

  export type PruebaParametroValorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PruebaParametroContinuoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParametroCountOrderByAggregateInput = {
    id?: SortOrder
    unidadId?: SortOrder
    nombre?: SortOrder
    tipoDato?: SortOrder
    obligatorio?: SortOrder
    activo?: SortOrder
  }

  export type ParametroAvgOrderByAggregateInput = {
    id?: SortOrder
    unidadId?: SortOrder
  }

  export type ParametroMaxOrderByAggregateInput = {
    id?: SortOrder
    unidadId?: SortOrder
    nombre?: SortOrder
    tipoDato?: SortOrder
    obligatorio?: SortOrder
    activo?: SortOrder
  }

  export type ParametroMinOrderByAggregateInput = {
    id?: SortOrder
    unidadId?: SortOrder
    nombre?: SortOrder
    tipoDato?: SortOrder
    obligatorio?: SortOrder
    activo?: SortOrder
  }

  export type ParametroSumOrderByAggregateInput = {
    id?: SortOrder
    unidadId?: SortOrder
  }

  export type DetallesScalarRelationFilter = {
    is?: DetallesWhereInput
    isNot?: DetallesWhereInput
  }

  export type MotorScalarRelationFilter = {
    is?: MotorWhereInput
    isNot?: MotorWhereInput
  }

  export type BombaScalarRelationFilter = {
    is?: BombaWhereInput
    isNot?: BombaWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type BancoScalarRelationFilter = {
    is?: BancoWhereInput
    isNot?: BancoWhereInput
  }

  export type PruebaCountOrderByAggregateInput = {
    numeroProtocolo?: SortOrder
    detallesId?: SortOrder
    motorId?: SortOrder
    bombaId?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
    fecha?: SortOrder
  }

  export type PruebaAvgOrderByAggregateInput = {
    numeroProtocolo?: SortOrder
    detallesId?: SortOrder
    motorId?: SortOrder
    bombaId?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
  }

  export type PruebaMaxOrderByAggregateInput = {
    numeroProtocolo?: SortOrder
    detallesId?: SortOrder
    motorId?: SortOrder
    bombaId?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
    fecha?: SortOrder
  }

  export type PruebaMinOrderByAggregateInput = {
    numeroProtocolo?: SortOrder
    detallesId?: SortOrder
    motorId?: SortOrder
    bombaId?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
    fecha?: SortOrder
  }

  export type PruebaSumOrderByAggregateInput = {
    numeroProtocolo?: SortOrder
    detallesId?: SortOrder
    motorId?: SortOrder
    bombaId?: SortOrder
    clienteId?: SortOrder
    bancoId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ParametroScalarRelationFilter = {
    is?: ParametroWhereInput
    isNot?: ParametroWhereInput
  }

  export type PruebaScalarRelationFilter = {
    is?: PruebaWhereInput
    isNot?: PruebaWhereInput
  }

  export type PruebaParametroValorPuntoIdParametroIdNumeroProtocoloCompoundUniqueInput = {
    puntoId: number
    parametroId: number
    numeroProtocolo: number
  }

  export type PruebaParametroValorCountOrderByAggregateInput = {
    puntoId?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
    valorTexto?: SortOrder
    valorFecha?: SortOrder
    valorBool?: SortOrder
  }

  export type PruebaParametroValorAvgOrderByAggregateInput = {
    puntoId?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
  }

  export type PruebaParametroValorMaxOrderByAggregateInput = {
    puntoId?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
    valorTexto?: SortOrder
    valorFecha?: SortOrder
    valorBool?: SortOrder
  }

  export type PruebaParametroValorMinOrderByAggregateInput = {
    puntoId?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
    valorTexto?: SortOrder
    valorFecha?: SortOrder
    valorBool?: SortOrder
  }

  export type PruebaParametroValorSumOrderByAggregateInput = {
    puntoId?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PruebaParametroContinuoNumeroProtocoloParametroIdFechaHoraCompoundUniqueInput = {
    numeroProtocolo: number
    parametroId: number
    fechaHora: Date | string
  }

  export type PruebaParametroContinuoCountOrderByAggregateInput = {
    fechaHora?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
    valorTexto?: SortOrder
    valorFecha?: SortOrder
    valorBool?: SortOrder
  }

  export type PruebaParametroContinuoAvgOrderByAggregateInput = {
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
  }

  export type PruebaParametroContinuoMaxOrderByAggregateInput = {
    fechaHora?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
    valorTexto?: SortOrder
    valorFecha?: SortOrder
    valorBool?: SortOrder
  }

  export type PruebaParametroContinuoMinOrderByAggregateInput = {
    fechaHora?: SortOrder
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
    valorTexto?: SortOrder
    valorFecha?: SortOrder
    valorBool?: SortOrder
  }

  export type PruebaParametroContinuoSumOrderByAggregateInput = {
    parametroId?: SortOrder
    numeroProtocolo?: SortOrder
    valorEntero?: SortOrder
    valorDecimal?: SortOrder
  }

  export type PedidoImportadoCountOrderByAggregateInput = {
    id?: SortOrder
    pedido?: SortOrder
    posicion?: SortOrder
    modeloBomba?: SortOrder
    ordenTrabajo?: SortOrder
    cliente?: SortOrder
    item?: SortOrder
    pedidoCliente?: SortOrder
    numeroBombas?: SortOrder
    fechaImportacion?: SortOrder
    procesado?: SortOrder
  }

  export type PedidoImportadoAvgOrderByAggregateInput = {
    id?: SortOrder
    numeroBombas?: SortOrder
  }

  export type PedidoImportadoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedido?: SortOrder
    posicion?: SortOrder
    modeloBomba?: SortOrder
    ordenTrabajo?: SortOrder
    cliente?: SortOrder
    item?: SortOrder
    pedidoCliente?: SortOrder
    numeroBombas?: SortOrder
    fechaImportacion?: SortOrder
    procesado?: SortOrder
  }

  export type PedidoImportadoMinOrderByAggregateInput = {
    id?: SortOrder
    pedido?: SortOrder
    posicion?: SortOrder
    modeloBomba?: SortOrder
    ordenTrabajo?: SortOrder
    cliente?: SortOrder
    item?: SortOrder
    pedidoCliente?: SortOrder
    numeroBombas?: SortOrder
    fechaImportacion?: SortOrder
    procesado?: SortOrder
  }

  export type PedidoImportadoSumOrderByAggregateInput = {
    id?: SortOrder
    numeroBombas?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParametroCreateNestedManyWithoutUnidadInput = {
    create?: XOR<ParametroCreateWithoutUnidadInput, ParametroUncheckedCreateWithoutUnidadInput> | ParametroCreateWithoutUnidadInput[] | ParametroUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: ParametroCreateOrConnectWithoutUnidadInput | ParametroCreateOrConnectWithoutUnidadInput[]
    createMany?: ParametroCreateManyUnidadInputEnvelope
    connect?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
  }

  export type ParametroUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: XOR<ParametroCreateWithoutUnidadInput, ParametroUncheckedCreateWithoutUnidadInput> | ParametroCreateWithoutUnidadInput[] | ParametroUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: ParametroCreateOrConnectWithoutUnidadInput | ParametroCreateOrConnectWithoutUnidadInput[]
    createMany?: ParametroCreateManyUnidadInputEnvelope
    connect?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
  }

  export type ParametroUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<ParametroCreateWithoutUnidadInput, ParametroUncheckedCreateWithoutUnidadInput> | ParametroCreateWithoutUnidadInput[] | ParametroUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: ParametroCreateOrConnectWithoutUnidadInput | ParametroCreateOrConnectWithoutUnidadInput[]
    upsert?: ParametroUpsertWithWhereUniqueWithoutUnidadInput | ParametroUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: ParametroCreateManyUnidadInputEnvelope
    set?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
    disconnect?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
    delete?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
    connect?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
    update?: ParametroUpdateWithWhereUniqueWithoutUnidadInput | ParametroUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: ParametroUpdateManyWithWhereWithoutUnidadInput | ParametroUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: ParametroScalarWhereInput | ParametroScalarWhereInput[]
  }

  export type ParametroUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<ParametroCreateWithoutUnidadInput, ParametroUncheckedCreateWithoutUnidadInput> | ParametroCreateWithoutUnidadInput[] | ParametroUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: ParametroCreateOrConnectWithoutUnidadInput | ParametroCreateOrConnectWithoutUnidadInput[]
    upsert?: ParametroUpsertWithWhereUniqueWithoutUnidadInput | ParametroUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: ParametroCreateManyUnidadInputEnvelope
    set?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
    disconnect?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
    delete?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
    connect?: ParametroWhereUniqueInput | ParametroWhereUniqueInput[]
    update?: ParametroUpdateWithWhereUniqueWithoutUnidadInput | ParametroUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: ParametroUpdateManyWithWhereWithoutUnidadInput | ParametroUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: ParametroScalarWhereInput | ParametroScalarWhereInput[]
  }

  export type PruebaCreateNestedManyWithoutMotorInput = {
    create?: XOR<PruebaCreateWithoutMotorInput, PruebaUncheckedCreateWithoutMotorInput> | PruebaCreateWithoutMotorInput[] | PruebaUncheckedCreateWithoutMotorInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutMotorInput | PruebaCreateOrConnectWithoutMotorInput[]
    createMany?: PruebaCreateManyMotorInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type PruebaUncheckedCreateNestedManyWithoutMotorInput = {
    create?: XOR<PruebaCreateWithoutMotorInput, PruebaUncheckedCreateWithoutMotorInput> | PruebaCreateWithoutMotorInput[] | PruebaUncheckedCreateWithoutMotorInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutMotorInput | PruebaCreateOrConnectWithoutMotorInput[]
    createMany?: PruebaCreateManyMotorInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PruebaUpdateManyWithoutMotorNestedInput = {
    create?: XOR<PruebaCreateWithoutMotorInput, PruebaUncheckedCreateWithoutMotorInput> | PruebaCreateWithoutMotorInput[] | PruebaUncheckedCreateWithoutMotorInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutMotorInput | PruebaCreateOrConnectWithoutMotorInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutMotorInput | PruebaUpsertWithWhereUniqueWithoutMotorInput[]
    createMany?: PruebaCreateManyMotorInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutMotorInput | PruebaUpdateWithWhereUniqueWithoutMotorInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutMotorInput | PruebaUpdateManyWithWhereWithoutMotorInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type PruebaUncheckedUpdateManyWithoutMotorNestedInput = {
    create?: XOR<PruebaCreateWithoutMotorInput, PruebaUncheckedCreateWithoutMotorInput> | PruebaCreateWithoutMotorInput[] | PruebaUncheckedCreateWithoutMotorInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutMotorInput | PruebaCreateOrConnectWithoutMotorInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutMotorInput | PruebaUpsertWithWhereUniqueWithoutMotorInput[]
    createMany?: PruebaCreateManyMotorInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutMotorInput | PruebaUpdateWithWhereUniqueWithoutMotorInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutMotorInput | PruebaUpdateManyWithWhereWithoutMotorInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type PruebaCreateNestedManyWithoutDetallesInput = {
    create?: XOR<PruebaCreateWithoutDetallesInput, PruebaUncheckedCreateWithoutDetallesInput> | PruebaCreateWithoutDetallesInput[] | PruebaUncheckedCreateWithoutDetallesInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutDetallesInput | PruebaCreateOrConnectWithoutDetallesInput[]
    createMany?: PruebaCreateManyDetallesInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type PruebaUncheckedCreateNestedManyWithoutDetallesInput = {
    create?: XOR<PruebaCreateWithoutDetallesInput, PruebaUncheckedCreateWithoutDetallesInput> | PruebaCreateWithoutDetallesInput[] | PruebaUncheckedCreateWithoutDetallesInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutDetallesInput | PruebaCreateOrConnectWithoutDetallesInput[]
    createMany?: PruebaCreateManyDetallesInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type PruebaUpdateManyWithoutDetallesNestedInput = {
    create?: XOR<PruebaCreateWithoutDetallesInput, PruebaUncheckedCreateWithoutDetallesInput> | PruebaCreateWithoutDetallesInput[] | PruebaUncheckedCreateWithoutDetallesInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutDetallesInput | PruebaCreateOrConnectWithoutDetallesInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutDetallesInput | PruebaUpsertWithWhereUniqueWithoutDetallesInput[]
    createMany?: PruebaCreateManyDetallesInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutDetallesInput | PruebaUpdateWithWhereUniqueWithoutDetallesInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutDetallesInput | PruebaUpdateManyWithWhereWithoutDetallesInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type PruebaUncheckedUpdateManyWithoutDetallesNestedInput = {
    create?: XOR<PruebaCreateWithoutDetallesInput, PruebaUncheckedCreateWithoutDetallesInput> | PruebaCreateWithoutDetallesInput[] | PruebaUncheckedCreateWithoutDetallesInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutDetallesInput | PruebaCreateOrConnectWithoutDetallesInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutDetallesInput | PruebaUpsertWithWhereUniqueWithoutDetallesInput[]
    createMany?: PruebaCreateManyDetallesInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutDetallesInput | PruebaUpdateWithWhereUniqueWithoutDetallesInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutDetallesInput | PruebaUpdateManyWithWhereWithoutDetallesInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type PruebaCreateNestedManyWithoutBancoInput = {
    create?: XOR<PruebaCreateWithoutBancoInput, PruebaUncheckedCreateWithoutBancoInput> | PruebaCreateWithoutBancoInput[] | PruebaUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutBancoInput | PruebaCreateOrConnectWithoutBancoInput[]
    createMany?: PruebaCreateManyBancoInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type PruebaUncheckedCreateNestedManyWithoutBancoInput = {
    create?: XOR<PruebaCreateWithoutBancoInput, PruebaUncheckedCreateWithoutBancoInput> | PruebaCreateWithoutBancoInput[] | PruebaUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutBancoInput | PruebaCreateOrConnectWithoutBancoInput[]
    createMany?: PruebaCreateManyBancoInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type PruebaUpdateManyWithoutBancoNestedInput = {
    create?: XOR<PruebaCreateWithoutBancoInput, PruebaUncheckedCreateWithoutBancoInput> | PruebaCreateWithoutBancoInput[] | PruebaUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutBancoInput | PruebaCreateOrConnectWithoutBancoInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutBancoInput | PruebaUpsertWithWhereUniqueWithoutBancoInput[]
    createMany?: PruebaCreateManyBancoInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutBancoInput | PruebaUpdateWithWhereUniqueWithoutBancoInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutBancoInput | PruebaUpdateManyWithWhereWithoutBancoInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type PruebaUncheckedUpdateManyWithoutBancoNestedInput = {
    create?: XOR<PruebaCreateWithoutBancoInput, PruebaUncheckedCreateWithoutBancoInput> | PruebaCreateWithoutBancoInput[] | PruebaUncheckedCreateWithoutBancoInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutBancoInput | PruebaCreateOrConnectWithoutBancoInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutBancoInput | PruebaUpsertWithWhereUniqueWithoutBancoInput[]
    createMany?: PruebaCreateManyBancoInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutBancoInput | PruebaUpdateWithWhereUniqueWithoutBancoInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutBancoInput | PruebaUpdateManyWithWhereWithoutBancoInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type PruebaCreateNestedManyWithoutBombaInput = {
    create?: XOR<PruebaCreateWithoutBombaInput, PruebaUncheckedCreateWithoutBombaInput> | PruebaCreateWithoutBombaInput[] | PruebaUncheckedCreateWithoutBombaInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutBombaInput | PruebaCreateOrConnectWithoutBombaInput[]
    createMany?: PruebaCreateManyBombaInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type PruebaUncheckedCreateNestedManyWithoutBombaInput = {
    create?: XOR<PruebaCreateWithoutBombaInput, PruebaUncheckedCreateWithoutBombaInput> | PruebaCreateWithoutBombaInput[] | PruebaUncheckedCreateWithoutBombaInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutBombaInput | PruebaCreateOrConnectWithoutBombaInput[]
    createMany?: PruebaCreateManyBombaInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type PruebaUpdateManyWithoutBombaNestedInput = {
    create?: XOR<PruebaCreateWithoutBombaInput, PruebaUncheckedCreateWithoutBombaInput> | PruebaCreateWithoutBombaInput[] | PruebaUncheckedCreateWithoutBombaInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutBombaInput | PruebaCreateOrConnectWithoutBombaInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutBombaInput | PruebaUpsertWithWhereUniqueWithoutBombaInput[]
    createMany?: PruebaCreateManyBombaInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutBombaInput | PruebaUpdateWithWhereUniqueWithoutBombaInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutBombaInput | PruebaUpdateManyWithWhereWithoutBombaInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type PruebaUncheckedUpdateManyWithoutBombaNestedInput = {
    create?: XOR<PruebaCreateWithoutBombaInput, PruebaUncheckedCreateWithoutBombaInput> | PruebaCreateWithoutBombaInput[] | PruebaUncheckedCreateWithoutBombaInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutBombaInput | PruebaCreateOrConnectWithoutBombaInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutBombaInput | PruebaUpsertWithWhereUniqueWithoutBombaInput[]
    createMany?: PruebaCreateManyBombaInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutBombaInput | PruebaUpdateWithWhereUniqueWithoutBombaInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutBombaInput | PruebaUpdateManyWithWhereWithoutBombaInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type PruebaCreateNestedManyWithoutClienteInput = {
    create?: XOR<PruebaCreateWithoutClienteInput, PruebaUncheckedCreateWithoutClienteInput> | PruebaCreateWithoutClienteInput[] | PruebaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutClienteInput | PruebaCreateOrConnectWithoutClienteInput[]
    createMany?: PruebaCreateManyClienteInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type PruebaUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PruebaCreateWithoutClienteInput, PruebaUncheckedCreateWithoutClienteInput> | PruebaCreateWithoutClienteInput[] | PruebaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutClienteInput | PruebaCreateOrConnectWithoutClienteInput[]
    createMany?: PruebaCreateManyClienteInputEnvelope
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PruebaUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PruebaCreateWithoutClienteInput, PruebaUncheckedCreateWithoutClienteInput> | PruebaCreateWithoutClienteInput[] | PruebaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutClienteInput | PruebaCreateOrConnectWithoutClienteInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutClienteInput | PruebaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PruebaCreateManyClienteInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutClienteInput | PruebaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutClienteInput | PruebaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type PruebaUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PruebaCreateWithoutClienteInput, PruebaUncheckedCreateWithoutClienteInput> | PruebaCreateWithoutClienteInput[] | PruebaUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PruebaCreateOrConnectWithoutClienteInput | PruebaCreateOrConnectWithoutClienteInput[]
    upsert?: PruebaUpsertWithWhereUniqueWithoutClienteInput | PruebaUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PruebaCreateManyClienteInputEnvelope
    set?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    disconnect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    delete?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    connect?: PruebaWhereUniqueInput | PruebaWhereUniqueInput[]
    update?: PruebaUpdateWithWhereUniqueWithoutClienteInput | PruebaUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PruebaUpdateManyWithWhereWithoutClienteInput | PruebaUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
  }

  export type UnidadCreateNestedOneWithoutParametrosInput = {
    create?: XOR<UnidadCreateWithoutParametrosInput, UnidadUncheckedCreateWithoutParametrosInput>
    connectOrCreate?: UnidadCreateOrConnectWithoutParametrosInput
    connect?: UnidadWhereUniqueInput
  }

  export type PruebaParametroValorCreateNestedManyWithoutParametroInput = {
    create?: XOR<PruebaParametroValorCreateWithoutParametroInput, PruebaParametroValorUncheckedCreateWithoutParametroInput> | PruebaParametroValorCreateWithoutParametroInput[] | PruebaParametroValorUncheckedCreateWithoutParametroInput[]
    connectOrCreate?: PruebaParametroValorCreateOrConnectWithoutParametroInput | PruebaParametroValorCreateOrConnectWithoutParametroInput[]
    createMany?: PruebaParametroValorCreateManyParametroInputEnvelope
    connect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
  }

  export type PruebaParametroContinuoCreateNestedManyWithoutParametroInput = {
    create?: XOR<PruebaParametroContinuoCreateWithoutParametroInput, PruebaParametroContinuoUncheckedCreateWithoutParametroInput> | PruebaParametroContinuoCreateWithoutParametroInput[] | PruebaParametroContinuoUncheckedCreateWithoutParametroInput[]
    connectOrCreate?: PruebaParametroContinuoCreateOrConnectWithoutParametroInput | PruebaParametroContinuoCreateOrConnectWithoutParametroInput[]
    createMany?: PruebaParametroContinuoCreateManyParametroInputEnvelope
    connect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
  }

  export type PruebaParametroValorUncheckedCreateNestedManyWithoutParametroInput = {
    create?: XOR<PruebaParametroValorCreateWithoutParametroInput, PruebaParametroValorUncheckedCreateWithoutParametroInput> | PruebaParametroValorCreateWithoutParametroInput[] | PruebaParametroValorUncheckedCreateWithoutParametroInput[]
    connectOrCreate?: PruebaParametroValorCreateOrConnectWithoutParametroInput | PruebaParametroValorCreateOrConnectWithoutParametroInput[]
    createMany?: PruebaParametroValorCreateManyParametroInputEnvelope
    connect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
  }

  export type PruebaParametroContinuoUncheckedCreateNestedManyWithoutParametroInput = {
    create?: XOR<PruebaParametroContinuoCreateWithoutParametroInput, PruebaParametroContinuoUncheckedCreateWithoutParametroInput> | PruebaParametroContinuoCreateWithoutParametroInput[] | PruebaParametroContinuoUncheckedCreateWithoutParametroInput[]
    connectOrCreate?: PruebaParametroContinuoCreateOrConnectWithoutParametroInput | PruebaParametroContinuoCreateOrConnectWithoutParametroInput[]
    createMany?: PruebaParametroContinuoCreateManyParametroInputEnvelope
    connect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
  }

  export type UnidadUpdateOneRequiredWithoutParametrosNestedInput = {
    create?: XOR<UnidadCreateWithoutParametrosInput, UnidadUncheckedCreateWithoutParametrosInput>
    connectOrCreate?: UnidadCreateOrConnectWithoutParametrosInput
    upsert?: UnidadUpsertWithoutParametrosInput
    connect?: UnidadWhereUniqueInput
    update?: XOR<XOR<UnidadUpdateToOneWithWhereWithoutParametrosInput, UnidadUpdateWithoutParametrosInput>, UnidadUncheckedUpdateWithoutParametrosInput>
  }

  export type PruebaParametroValorUpdateManyWithoutParametroNestedInput = {
    create?: XOR<PruebaParametroValorCreateWithoutParametroInput, PruebaParametroValorUncheckedCreateWithoutParametroInput> | PruebaParametroValorCreateWithoutParametroInput[] | PruebaParametroValorUncheckedCreateWithoutParametroInput[]
    connectOrCreate?: PruebaParametroValorCreateOrConnectWithoutParametroInput | PruebaParametroValorCreateOrConnectWithoutParametroInput[]
    upsert?: PruebaParametroValorUpsertWithWhereUniqueWithoutParametroInput | PruebaParametroValorUpsertWithWhereUniqueWithoutParametroInput[]
    createMany?: PruebaParametroValorCreateManyParametroInputEnvelope
    set?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    disconnect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    delete?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    connect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    update?: PruebaParametroValorUpdateWithWhereUniqueWithoutParametroInput | PruebaParametroValorUpdateWithWhereUniqueWithoutParametroInput[]
    updateMany?: PruebaParametroValorUpdateManyWithWhereWithoutParametroInput | PruebaParametroValorUpdateManyWithWhereWithoutParametroInput[]
    deleteMany?: PruebaParametroValorScalarWhereInput | PruebaParametroValorScalarWhereInput[]
  }

  export type PruebaParametroContinuoUpdateManyWithoutParametroNestedInput = {
    create?: XOR<PruebaParametroContinuoCreateWithoutParametroInput, PruebaParametroContinuoUncheckedCreateWithoutParametroInput> | PruebaParametroContinuoCreateWithoutParametroInput[] | PruebaParametroContinuoUncheckedCreateWithoutParametroInput[]
    connectOrCreate?: PruebaParametroContinuoCreateOrConnectWithoutParametroInput | PruebaParametroContinuoCreateOrConnectWithoutParametroInput[]
    upsert?: PruebaParametroContinuoUpsertWithWhereUniqueWithoutParametroInput | PruebaParametroContinuoUpsertWithWhereUniqueWithoutParametroInput[]
    createMany?: PruebaParametroContinuoCreateManyParametroInputEnvelope
    set?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    disconnect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    delete?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    connect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    update?: PruebaParametroContinuoUpdateWithWhereUniqueWithoutParametroInput | PruebaParametroContinuoUpdateWithWhereUniqueWithoutParametroInput[]
    updateMany?: PruebaParametroContinuoUpdateManyWithWhereWithoutParametroInput | PruebaParametroContinuoUpdateManyWithWhereWithoutParametroInput[]
    deleteMany?: PruebaParametroContinuoScalarWhereInput | PruebaParametroContinuoScalarWhereInput[]
  }

  export type PruebaParametroValorUncheckedUpdateManyWithoutParametroNestedInput = {
    create?: XOR<PruebaParametroValorCreateWithoutParametroInput, PruebaParametroValorUncheckedCreateWithoutParametroInput> | PruebaParametroValorCreateWithoutParametroInput[] | PruebaParametroValorUncheckedCreateWithoutParametroInput[]
    connectOrCreate?: PruebaParametroValorCreateOrConnectWithoutParametroInput | PruebaParametroValorCreateOrConnectWithoutParametroInput[]
    upsert?: PruebaParametroValorUpsertWithWhereUniqueWithoutParametroInput | PruebaParametroValorUpsertWithWhereUniqueWithoutParametroInput[]
    createMany?: PruebaParametroValorCreateManyParametroInputEnvelope
    set?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    disconnect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    delete?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    connect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    update?: PruebaParametroValorUpdateWithWhereUniqueWithoutParametroInput | PruebaParametroValorUpdateWithWhereUniqueWithoutParametroInput[]
    updateMany?: PruebaParametroValorUpdateManyWithWhereWithoutParametroInput | PruebaParametroValorUpdateManyWithWhereWithoutParametroInput[]
    deleteMany?: PruebaParametroValorScalarWhereInput | PruebaParametroValorScalarWhereInput[]
  }

  export type PruebaParametroContinuoUncheckedUpdateManyWithoutParametroNestedInput = {
    create?: XOR<PruebaParametroContinuoCreateWithoutParametroInput, PruebaParametroContinuoUncheckedCreateWithoutParametroInput> | PruebaParametroContinuoCreateWithoutParametroInput[] | PruebaParametroContinuoUncheckedCreateWithoutParametroInput[]
    connectOrCreate?: PruebaParametroContinuoCreateOrConnectWithoutParametroInput | PruebaParametroContinuoCreateOrConnectWithoutParametroInput[]
    upsert?: PruebaParametroContinuoUpsertWithWhereUniqueWithoutParametroInput | PruebaParametroContinuoUpsertWithWhereUniqueWithoutParametroInput[]
    createMany?: PruebaParametroContinuoCreateManyParametroInputEnvelope
    set?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    disconnect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    delete?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    connect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    update?: PruebaParametroContinuoUpdateWithWhereUniqueWithoutParametroInput | PruebaParametroContinuoUpdateWithWhereUniqueWithoutParametroInput[]
    updateMany?: PruebaParametroContinuoUpdateManyWithWhereWithoutParametroInput | PruebaParametroContinuoUpdateManyWithWhereWithoutParametroInput[]
    deleteMany?: PruebaParametroContinuoScalarWhereInput | PruebaParametroContinuoScalarWhereInput[]
  }

  export type DetallesCreateNestedOneWithoutPruebasInput = {
    create?: XOR<DetallesCreateWithoutPruebasInput, DetallesUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: DetallesCreateOrConnectWithoutPruebasInput
    connect?: DetallesWhereUniqueInput
  }

  export type MotorCreateNestedOneWithoutPruebasInput = {
    create?: XOR<MotorCreateWithoutPruebasInput, MotorUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: MotorCreateOrConnectWithoutPruebasInput
    connect?: MotorWhereUniqueInput
  }

  export type BombaCreateNestedOneWithoutPruebasInput = {
    create?: XOR<BombaCreateWithoutPruebasInput, BombaUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: BombaCreateOrConnectWithoutPruebasInput
    connect?: BombaWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutPruebasInput = {
    create?: XOR<ClienteCreateWithoutPruebasInput, ClienteUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPruebasInput
    connect?: ClienteWhereUniqueInput
  }

  export type BancoCreateNestedOneWithoutPruebasInput = {
    create?: XOR<BancoCreateWithoutPruebasInput, BancoUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: BancoCreateOrConnectWithoutPruebasInput
    connect?: BancoWhereUniqueInput
  }

  export type PruebaParametroValorCreateNestedManyWithoutPruebaInput = {
    create?: XOR<PruebaParametroValorCreateWithoutPruebaInput, PruebaParametroValorUncheckedCreateWithoutPruebaInput> | PruebaParametroValorCreateWithoutPruebaInput[] | PruebaParametroValorUncheckedCreateWithoutPruebaInput[]
    connectOrCreate?: PruebaParametroValorCreateOrConnectWithoutPruebaInput | PruebaParametroValorCreateOrConnectWithoutPruebaInput[]
    createMany?: PruebaParametroValorCreateManyPruebaInputEnvelope
    connect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
  }

  export type PruebaParametroContinuoCreateNestedManyWithoutPruebaInput = {
    create?: XOR<PruebaParametroContinuoCreateWithoutPruebaInput, PruebaParametroContinuoUncheckedCreateWithoutPruebaInput> | PruebaParametroContinuoCreateWithoutPruebaInput[] | PruebaParametroContinuoUncheckedCreateWithoutPruebaInput[]
    connectOrCreate?: PruebaParametroContinuoCreateOrConnectWithoutPruebaInput | PruebaParametroContinuoCreateOrConnectWithoutPruebaInput[]
    createMany?: PruebaParametroContinuoCreateManyPruebaInputEnvelope
    connect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
  }

  export type PruebaParametroValorUncheckedCreateNestedManyWithoutPruebaInput = {
    create?: XOR<PruebaParametroValorCreateWithoutPruebaInput, PruebaParametroValorUncheckedCreateWithoutPruebaInput> | PruebaParametroValorCreateWithoutPruebaInput[] | PruebaParametroValorUncheckedCreateWithoutPruebaInput[]
    connectOrCreate?: PruebaParametroValorCreateOrConnectWithoutPruebaInput | PruebaParametroValorCreateOrConnectWithoutPruebaInput[]
    createMany?: PruebaParametroValorCreateManyPruebaInputEnvelope
    connect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
  }

  export type PruebaParametroContinuoUncheckedCreateNestedManyWithoutPruebaInput = {
    create?: XOR<PruebaParametroContinuoCreateWithoutPruebaInput, PruebaParametroContinuoUncheckedCreateWithoutPruebaInput> | PruebaParametroContinuoCreateWithoutPruebaInput[] | PruebaParametroContinuoUncheckedCreateWithoutPruebaInput[]
    connectOrCreate?: PruebaParametroContinuoCreateOrConnectWithoutPruebaInput | PruebaParametroContinuoCreateOrConnectWithoutPruebaInput[]
    createMany?: PruebaParametroContinuoCreateManyPruebaInputEnvelope
    connect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
  }

  export type DetallesUpdateOneRequiredWithoutPruebasNestedInput = {
    create?: XOR<DetallesCreateWithoutPruebasInput, DetallesUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: DetallesCreateOrConnectWithoutPruebasInput
    upsert?: DetallesUpsertWithoutPruebasInput
    connect?: DetallesWhereUniqueInput
    update?: XOR<XOR<DetallesUpdateToOneWithWhereWithoutPruebasInput, DetallesUpdateWithoutPruebasInput>, DetallesUncheckedUpdateWithoutPruebasInput>
  }

  export type MotorUpdateOneRequiredWithoutPruebasNestedInput = {
    create?: XOR<MotorCreateWithoutPruebasInput, MotorUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: MotorCreateOrConnectWithoutPruebasInput
    upsert?: MotorUpsertWithoutPruebasInput
    connect?: MotorWhereUniqueInput
    update?: XOR<XOR<MotorUpdateToOneWithWhereWithoutPruebasInput, MotorUpdateWithoutPruebasInput>, MotorUncheckedUpdateWithoutPruebasInput>
  }

  export type BombaUpdateOneRequiredWithoutPruebasNestedInput = {
    create?: XOR<BombaCreateWithoutPruebasInput, BombaUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: BombaCreateOrConnectWithoutPruebasInput
    upsert?: BombaUpsertWithoutPruebasInput
    connect?: BombaWhereUniqueInput
    update?: XOR<XOR<BombaUpdateToOneWithWhereWithoutPruebasInput, BombaUpdateWithoutPruebasInput>, BombaUncheckedUpdateWithoutPruebasInput>
  }

  export type ClienteUpdateOneRequiredWithoutPruebasNestedInput = {
    create?: XOR<ClienteCreateWithoutPruebasInput, ClienteUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPruebasInput
    upsert?: ClienteUpsertWithoutPruebasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPruebasInput, ClienteUpdateWithoutPruebasInput>, ClienteUncheckedUpdateWithoutPruebasInput>
  }

  export type BancoUpdateOneRequiredWithoutPruebasNestedInput = {
    create?: XOR<BancoCreateWithoutPruebasInput, BancoUncheckedCreateWithoutPruebasInput>
    connectOrCreate?: BancoCreateOrConnectWithoutPruebasInput
    upsert?: BancoUpsertWithoutPruebasInput
    connect?: BancoWhereUniqueInput
    update?: XOR<XOR<BancoUpdateToOneWithWhereWithoutPruebasInput, BancoUpdateWithoutPruebasInput>, BancoUncheckedUpdateWithoutPruebasInput>
  }

  export type PruebaParametroValorUpdateManyWithoutPruebaNestedInput = {
    create?: XOR<PruebaParametroValorCreateWithoutPruebaInput, PruebaParametroValorUncheckedCreateWithoutPruebaInput> | PruebaParametroValorCreateWithoutPruebaInput[] | PruebaParametroValorUncheckedCreateWithoutPruebaInput[]
    connectOrCreate?: PruebaParametroValorCreateOrConnectWithoutPruebaInput | PruebaParametroValorCreateOrConnectWithoutPruebaInput[]
    upsert?: PruebaParametroValorUpsertWithWhereUniqueWithoutPruebaInput | PruebaParametroValorUpsertWithWhereUniqueWithoutPruebaInput[]
    createMany?: PruebaParametroValorCreateManyPruebaInputEnvelope
    set?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    disconnect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    delete?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    connect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    update?: PruebaParametroValorUpdateWithWhereUniqueWithoutPruebaInput | PruebaParametroValorUpdateWithWhereUniqueWithoutPruebaInput[]
    updateMany?: PruebaParametroValorUpdateManyWithWhereWithoutPruebaInput | PruebaParametroValorUpdateManyWithWhereWithoutPruebaInput[]
    deleteMany?: PruebaParametroValorScalarWhereInput | PruebaParametroValorScalarWhereInput[]
  }

  export type PruebaParametroContinuoUpdateManyWithoutPruebaNestedInput = {
    create?: XOR<PruebaParametroContinuoCreateWithoutPruebaInput, PruebaParametroContinuoUncheckedCreateWithoutPruebaInput> | PruebaParametroContinuoCreateWithoutPruebaInput[] | PruebaParametroContinuoUncheckedCreateWithoutPruebaInput[]
    connectOrCreate?: PruebaParametroContinuoCreateOrConnectWithoutPruebaInput | PruebaParametroContinuoCreateOrConnectWithoutPruebaInput[]
    upsert?: PruebaParametroContinuoUpsertWithWhereUniqueWithoutPruebaInput | PruebaParametroContinuoUpsertWithWhereUniqueWithoutPruebaInput[]
    createMany?: PruebaParametroContinuoCreateManyPruebaInputEnvelope
    set?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    disconnect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    delete?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    connect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    update?: PruebaParametroContinuoUpdateWithWhereUniqueWithoutPruebaInput | PruebaParametroContinuoUpdateWithWhereUniqueWithoutPruebaInput[]
    updateMany?: PruebaParametroContinuoUpdateManyWithWhereWithoutPruebaInput | PruebaParametroContinuoUpdateManyWithWhereWithoutPruebaInput[]
    deleteMany?: PruebaParametroContinuoScalarWhereInput | PruebaParametroContinuoScalarWhereInput[]
  }

  export type PruebaParametroValorUncheckedUpdateManyWithoutPruebaNestedInput = {
    create?: XOR<PruebaParametroValorCreateWithoutPruebaInput, PruebaParametroValorUncheckedCreateWithoutPruebaInput> | PruebaParametroValorCreateWithoutPruebaInput[] | PruebaParametroValorUncheckedCreateWithoutPruebaInput[]
    connectOrCreate?: PruebaParametroValorCreateOrConnectWithoutPruebaInput | PruebaParametroValorCreateOrConnectWithoutPruebaInput[]
    upsert?: PruebaParametroValorUpsertWithWhereUniqueWithoutPruebaInput | PruebaParametroValorUpsertWithWhereUniqueWithoutPruebaInput[]
    createMany?: PruebaParametroValorCreateManyPruebaInputEnvelope
    set?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    disconnect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    delete?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    connect?: PruebaParametroValorWhereUniqueInput | PruebaParametroValorWhereUniqueInput[]
    update?: PruebaParametroValorUpdateWithWhereUniqueWithoutPruebaInput | PruebaParametroValorUpdateWithWhereUniqueWithoutPruebaInput[]
    updateMany?: PruebaParametroValorUpdateManyWithWhereWithoutPruebaInput | PruebaParametroValorUpdateManyWithWhereWithoutPruebaInput[]
    deleteMany?: PruebaParametroValorScalarWhereInput | PruebaParametroValorScalarWhereInput[]
  }

  export type PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaNestedInput = {
    create?: XOR<PruebaParametroContinuoCreateWithoutPruebaInput, PruebaParametroContinuoUncheckedCreateWithoutPruebaInput> | PruebaParametroContinuoCreateWithoutPruebaInput[] | PruebaParametroContinuoUncheckedCreateWithoutPruebaInput[]
    connectOrCreate?: PruebaParametroContinuoCreateOrConnectWithoutPruebaInput | PruebaParametroContinuoCreateOrConnectWithoutPruebaInput[]
    upsert?: PruebaParametroContinuoUpsertWithWhereUniqueWithoutPruebaInput | PruebaParametroContinuoUpsertWithWhereUniqueWithoutPruebaInput[]
    createMany?: PruebaParametroContinuoCreateManyPruebaInputEnvelope
    set?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    disconnect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    delete?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    connect?: PruebaParametroContinuoWhereUniqueInput | PruebaParametroContinuoWhereUniqueInput[]
    update?: PruebaParametroContinuoUpdateWithWhereUniqueWithoutPruebaInput | PruebaParametroContinuoUpdateWithWhereUniqueWithoutPruebaInput[]
    updateMany?: PruebaParametroContinuoUpdateManyWithWhereWithoutPruebaInput | PruebaParametroContinuoUpdateManyWithWhereWithoutPruebaInput[]
    deleteMany?: PruebaParametroContinuoScalarWhereInput | PruebaParametroContinuoScalarWhereInput[]
  }

  export type ParametroCreateNestedOneWithoutValoresInput = {
    create?: XOR<ParametroCreateWithoutValoresInput, ParametroUncheckedCreateWithoutValoresInput>
    connectOrCreate?: ParametroCreateOrConnectWithoutValoresInput
    connect?: ParametroWhereUniqueInput
  }

  export type PruebaCreateNestedOneWithoutValoresInput = {
    create?: XOR<PruebaCreateWithoutValoresInput, PruebaUncheckedCreateWithoutValoresInput>
    connectOrCreate?: PruebaCreateOrConnectWithoutValoresInput
    connect?: PruebaWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type ParametroUpdateOneRequiredWithoutValoresNestedInput = {
    create?: XOR<ParametroCreateWithoutValoresInput, ParametroUncheckedCreateWithoutValoresInput>
    connectOrCreate?: ParametroCreateOrConnectWithoutValoresInput
    upsert?: ParametroUpsertWithoutValoresInput
    connect?: ParametroWhereUniqueInput
    update?: XOR<XOR<ParametroUpdateToOneWithWhereWithoutValoresInput, ParametroUpdateWithoutValoresInput>, ParametroUncheckedUpdateWithoutValoresInput>
  }

  export type PruebaUpdateOneRequiredWithoutValoresNestedInput = {
    create?: XOR<PruebaCreateWithoutValoresInput, PruebaUncheckedCreateWithoutValoresInput>
    connectOrCreate?: PruebaCreateOrConnectWithoutValoresInput
    upsert?: PruebaUpsertWithoutValoresInput
    connect?: PruebaWhereUniqueInput
    update?: XOR<XOR<PruebaUpdateToOneWithWhereWithoutValoresInput, PruebaUpdateWithoutValoresInput>, PruebaUncheckedUpdateWithoutValoresInput>
  }

  export type ParametroCreateNestedOneWithoutContinuosInput = {
    create?: XOR<ParametroCreateWithoutContinuosInput, ParametroUncheckedCreateWithoutContinuosInput>
    connectOrCreate?: ParametroCreateOrConnectWithoutContinuosInput
    connect?: ParametroWhereUniqueInput
  }

  export type PruebaCreateNestedOneWithoutContinuosInput = {
    create?: XOR<PruebaCreateWithoutContinuosInput, PruebaUncheckedCreateWithoutContinuosInput>
    connectOrCreate?: PruebaCreateOrConnectWithoutContinuosInput
    connect?: PruebaWhereUniqueInput
  }

  export type ParametroUpdateOneRequiredWithoutContinuosNestedInput = {
    create?: XOR<ParametroCreateWithoutContinuosInput, ParametroUncheckedCreateWithoutContinuosInput>
    connectOrCreate?: ParametroCreateOrConnectWithoutContinuosInput
    upsert?: ParametroUpsertWithoutContinuosInput
    connect?: ParametroWhereUniqueInput
    update?: XOR<XOR<ParametroUpdateToOneWithWhereWithoutContinuosInput, ParametroUpdateWithoutContinuosInput>, ParametroUncheckedUpdateWithoutContinuosInput>
  }

  export type PruebaUpdateOneRequiredWithoutContinuosNestedInput = {
    create?: XOR<PruebaCreateWithoutContinuosInput, PruebaUncheckedCreateWithoutContinuosInput>
    connectOrCreate?: PruebaCreateOrConnectWithoutContinuosInput
    upsert?: PruebaUpsertWithoutContinuosInput
    connect?: PruebaWhereUniqueInput
    update?: XOR<XOR<PruebaUpdateToOneWithWhereWithoutContinuosInput, PruebaUpdateWithoutContinuosInput>, PruebaUncheckedUpdateWithoutContinuosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ParametroCreateWithoutUnidadInput = {
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
    valores?: PruebaParametroValorCreateNestedManyWithoutParametroInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutParametroInput
  }

  export type ParametroUncheckedCreateWithoutUnidadInput = {
    id?: number
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutParametroInput
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutParametroInput
  }

  export type ParametroCreateOrConnectWithoutUnidadInput = {
    where: ParametroWhereUniqueInput
    create: XOR<ParametroCreateWithoutUnidadInput, ParametroUncheckedCreateWithoutUnidadInput>
  }

  export type ParametroCreateManyUnidadInputEnvelope = {
    data: ParametroCreateManyUnidadInput | ParametroCreateManyUnidadInput[]
    skipDuplicates?: boolean
  }

  export type ParametroUpsertWithWhereUniqueWithoutUnidadInput = {
    where: ParametroWhereUniqueInput
    update: XOR<ParametroUpdateWithoutUnidadInput, ParametroUncheckedUpdateWithoutUnidadInput>
    create: XOR<ParametroCreateWithoutUnidadInput, ParametroUncheckedCreateWithoutUnidadInput>
  }

  export type ParametroUpdateWithWhereUniqueWithoutUnidadInput = {
    where: ParametroWhereUniqueInput
    data: XOR<ParametroUpdateWithoutUnidadInput, ParametroUncheckedUpdateWithoutUnidadInput>
  }

  export type ParametroUpdateManyWithWhereWithoutUnidadInput = {
    where: ParametroScalarWhereInput
    data: XOR<ParametroUpdateManyMutationInput, ParametroUncheckedUpdateManyWithoutUnidadInput>
  }

  export type ParametroScalarWhereInput = {
    AND?: ParametroScalarWhereInput | ParametroScalarWhereInput[]
    OR?: ParametroScalarWhereInput[]
    NOT?: ParametroScalarWhereInput | ParametroScalarWhereInput[]
    id?: IntFilter<"Parametro"> | number
    unidadId?: IntFilter<"Parametro"> | number
    nombre?: StringNullableFilter<"Parametro"> | string | null
    tipoDato?: StringNullableFilter<"Parametro"> | string | null
    obligatorio?: BoolFilter<"Parametro"> | boolean
    activo?: BoolFilter<"Parametro"> | boolean
  }

  export type PruebaCreateWithoutMotorInput = {
    fecha?: Date | string
    detalles: DetallesCreateNestedOneWithoutPruebasInput
    bomba: BombaCreateNestedOneWithoutPruebasInput
    cliente: ClienteCreateNestedOneWithoutPruebasInput
    banco: BancoCreateNestedOneWithoutPruebasInput
    valores?: PruebaParametroValorCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutPruebaInput
  }

  export type PruebaUncheckedCreateWithoutMotorInput = {
    numeroProtocolo?: number
    detallesId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutPruebaInput
  }

  export type PruebaCreateOrConnectWithoutMotorInput = {
    where: PruebaWhereUniqueInput
    create: XOR<PruebaCreateWithoutMotorInput, PruebaUncheckedCreateWithoutMotorInput>
  }

  export type PruebaCreateManyMotorInputEnvelope = {
    data: PruebaCreateManyMotorInput | PruebaCreateManyMotorInput[]
    skipDuplicates?: boolean
  }

  export type PruebaUpsertWithWhereUniqueWithoutMotorInput = {
    where: PruebaWhereUniqueInput
    update: XOR<PruebaUpdateWithoutMotorInput, PruebaUncheckedUpdateWithoutMotorInput>
    create: XOR<PruebaCreateWithoutMotorInput, PruebaUncheckedCreateWithoutMotorInput>
  }

  export type PruebaUpdateWithWhereUniqueWithoutMotorInput = {
    where: PruebaWhereUniqueInput
    data: XOR<PruebaUpdateWithoutMotorInput, PruebaUncheckedUpdateWithoutMotorInput>
  }

  export type PruebaUpdateManyWithWhereWithoutMotorInput = {
    where: PruebaScalarWhereInput
    data: XOR<PruebaUpdateManyMutationInput, PruebaUncheckedUpdateManyWithoutMotorInput>
  }

  export type PruebaScalarWhereInput = {
    AND?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
    OR?: PruebaScalarWhereInput[]
    NOT?: PruebaScalarWhereInput | PruebaScalarWhereInput[]
    numeroProtocolo?: IntFilter<"Prueba"> | number
    detallesId?: IntFilter<"Prueba"> | number
    motorId?: IntFilter<"Prueba"> | number
    bombaId?: IntFilter<"Prueba"> | number
    clienteId?: IntFilter<"Prueba"> | number
    bancoId?: IntFilter<"Prueba"> | number
    fecha?: DateTimeFilter<"Prueba"> | Date | string
  }

  export type PruebaCreateWithoutDetallesInput = {
    fecha?: Date | string
    motor: MotorCreateNestedOneWithoutPruebasInput
    bomba: BombaCreateNestedOneWithoutPruebasInput
    cliente: ClienteCreateNestedOneWithoutPruebasInput
    banco: BancoCreateNestedOneWithoutPruebasInput
    valores?: PruebaParametroValorCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutPruebaInput
  }

  export type PruebaUncheckedCreateWithoutDetallesInput = {
    numeroProtocolo?: number
    motorId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutPruebaInput
  }

  export type PruebaCreateOrConnectWithoutDetallesInput = {
    where: PruebaWhereUniqueInput
    create: XOR<PruebaCreateWithoutDetallesInput, PruebaUncheckedCreateWithoutDetallesInput>
  }

  export type PruebaCreateManyDetallesInputEnvelope = {
    data: PruebaCreateManyDetallesInput | PruebaCreateManyDetallesInput[]
    skipDuplicates?: boolean
  }

  export type PruebaUpsertWithWhereUniqueWithoutDetallesInput = {
    where: PruebaWhereUniqueInput
    update: XOR<PruebaUpdateWithoutDetallesInput, PruebaUncheckedUpdateWithoutDetallesInput>
    create: XOR<PruebaCreateWithoutDetallesInput, PruebaUncheckedCreateWithoutDetallesInput>
  }

  export type PruebaUpdateWithWhereUniqueWithoutDetallesInput = {
    where: PruebaWhereUniqueInput
    data: XOR<PruebaUpdateWithoutDetallesInput, PruebaUncheckedUpdateWithoutDetallesInput>
  }

  export type PruebaUpdateManyWithWhereWithoutDetallesInput = {
    where: PruebaScalarWhereInput
    data: XOR<PruebaUpdateManyMutationInput, PruebaUncheckedUpdateManyWithoutDetallesInput>
  }

  export type PruebaCreateWithoutBancoInput = {
    fecha?: Date | string
    detalles: DetallesCreateNestedOneWithoutPruebasInput
    motor: MotorCreateNestedOneWithoutPruebasInput
    bomba: BombaCreateNestedOneWithoutPruebasInput
    cliente: ClienteCreateNestedOneWithoutPruebasInput
    valores?: PruebaParametroValorCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutPruebaInput
  }

  export type PruebaUncheckedCreateWithoutBancoInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    bombaId: number
    clienteId: number
    fecha?: Date | string
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutPruebaInput
  }

  export type PruebaCreateOrConnectWithoutBancoInput = {
    where: PruebaWhereUniqueInput
    create: XOR<PruebaCreateWithoutBancoInput, PruebaUncheckedCreateWithoutBancoInput>
  }

  export type PruebaCreateManyBancoInputEnvelope = {
    data: PruebaCreateManyBancoInput | PruebaCreateManyBancoInput[]
    skipDuplicates?: boolean
  }

  export type PruebaUpsertWithWhereUniqueWithoutBancoInput = {
    where: PruebaWhereUniqueInput
    update: XOR<PruebaUpdateWithoutBancoInput, PruebaUncheckedUpdateWithoutBancoInput>
    create: XOR<PruebaCreateWithoutBancoInput, PruebaUncheckedCreateWithoutBancoInput>
  }

  export type PruebaUpdateWithWhereUniqueWithoutBancoInput = {
    where: PruebaWhereUniqueInput
    data: XOR<PruebaUpdateWithoutBancoInput, PruebaUncheckedUpdateWithoutBancoInput>
  }

  export type PruebaUpdateManyWithWhereWithoutBancoInput = {
    where: PruebaScalarWhereInput
    data: XOR<PruebaUpdateManyMutationInput, PruebaUncheckedUpdateManyWithoutBancoInput>
  }

  export type PruebaCreateWithoutBombaInput = {
    fecha?: Date | string
    detalles: DetallesCreateNestedOneWithoutPruebasInput
    motor: MotorCreateNestedOneWithoutPruebasInput
    cliente: ClienteCreateNestedOneWithoutPruebasInput
    banco: BancoCreateNestedOneWithoutPruebasInput
    valores?: PruebaParametroValorCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutPruebaInput
  }

  export type PruebaUncheckedCreateWithoutBombaInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutPruebaInput
  }

  export type PruebaCreateOrConnectWithoutBombaInput = {
    where: PruebaWhereUniqueInput
    create: XOR<PruebaCreateWithoutBombaInput, PruebaUncheckedCreateWithoutBombaInput>
  }

  export type PruebaCreateManyBombaInputEnvelope = {
    data: PruebaCreateManyBombaInput | PruebaCreateManyBombaInput[]
    skipDuplicates?: boolean
  }

  export type PruebaUpsertWithWhereUniqueWithoutBombaInput = {
    where: PruebaWhereUniqueInput
    update: XOR<PruebaUpdateWithoutBombaInput, PruebaUncheckedUpdateWithoutBombaInput>
    create: XOR<PruebaCreateWithoutBombaInput, PruebaUncheckedCreateWithoutBombaInput>
  }

  export type PruebaUpdateWithWhereUniqueWithoutBombaInput = {
    where: PruebaWhereUniqueInput
    data: XOR<PruebaUpdateWithoutBombaInput, PruebaUncheckedUpdateWithoutBombaInput>
  }

  export type PruebaUpdateManyWithWhereWithoutBombaInput = {
    where: PruebaScalarWhereInput
    data: XOR<PruebaUpdateManyMutationInput, PruebaUncheckedUpdateManyWithoutBombaInput>
  }

  export type PruebaCreateWithoutClienteInput = {
    fecha?: Date | string
    detalles: DetallesCreateNestedOneWithoutPruebasInput
    motor: MotorCreateNestedOneWithoutPruebasInput
    bomba: BombaCreateNestedOneWithoutPruebasInput
    banco: BancoCreateNestedOneWithoutPruebasInput
    valores?: PruebaParametroValorCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutPruebaInput
  }

  export type PruebaUncheckedCreateWithoutClienteInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    bombaId: number
    bancoId: number
    fecha?: Date | string
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutPruebaInput
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutPruebaInput
  }

  export type PruebaCreateOrConnectWithoutClienteInput = {
    where: PruebaWhereUniqueInput
    create: XOR<PruebaCreateWithoutClienteInput, PruebaUncheckedCreateWithoutClienteInput>
  }

  export type PruebaCreateManyClienteInputEnvelope = {
    data: PruebaCreateManyClienteInput | PruebaCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PruebaUpsertWithWhereUniqueWithoutClienteInput = {
    where: PruebaWhereUniqueInput
    update: XOR<PruebaUpdateWithoutClienteInput, PruebaUncheckedUpdateWithoutClienteInput>
    create: XOR<PruebaCreateWithoutClienteInput, PruebaUncheckedCreateWithoutClienteInput>
  }

  export type PruebaUpdateWithWhereUniqueWithoutClienteInput = {
    where: PruebaWhereUniqueInput
    data: XOR<PruebaUpdateWithoutClienteInput, PruebaUncheckedUpdateWithoutClienteInput>
  }

  export type PruebaUpdateManyWithWhereWithoutClienteInput = {
    where: PruebaScalarWhereInput
    data: XOR<PruebaUpdateManyMutationInput, PruebaUncheckedUpdateManyWithoutClienteInput>
  }

  export type UnidadCreateWithoutParametrosInput = {
    nombre: string
  }

  export type UnidadUncheckedCreateWithoutParametrosInput = {
    id?: number
    nombre: string
  }

  export type UnidadCreateOrConnectWithoutParametrosInput = {
    where: UnidadWhereUniqueInput
    create: XOR<UnidadCreateWithoutParametrosInput, UnidadUncheckedCreateWithoutParametrosInput>
  }

  export type PruebaParametroValorCreateWithoutParametroInput = {
    puntoId: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
    prueba: PruebaCreateNestedOneWithoutValoresInput
  }

  export type PruebaParametroValorUncheckedCreateWithoutParametroInput = {
    puntoId: number
    numeroProtocolo: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroValorCreateOrConnectWithoutParametroInput = {
    where: PruebaParametroValorWhereUniqueInput
    create: XOR<PruebaParametroValorCreateWithoutParametroInput, PruebaParametroValorUncheckedCreateWithoutParametroInput>
  }

  export type PruebaParametroValorCreateManyParametroInputEnvelope = {
    data: PruebaParametroValorCreateManyParametroInput | PruebaParametroValorCreateManyParametroInput[]
    skipDuplicates?: boolean
  }

  export type PruebaParametroContinuoCreateWithoutParametroInput = {
    fechaHora: Date | string
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
    prueba: PruebaCreateNestedOneWithoutContinuosInput
  }

  export type PruebaParametroContinuoUncheckedCreateWithoutParametroInput = {
    fechaHora: Date | string
    numeroProtocolo: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroContinuoCreateOrConnectWithoutParametroInput = {
    where: PruebaParametroContinuoWhereUniqueInput
    create: XOR<PruebaParametroContinuoCreateWithoutParametroInput, PruebaParametroContinuoUncheckedCreateWithoutParametroInput>
  }

  export type PruebaParametroContinuoCreateManyParametroInputEnvelope = {
    data: PruebaParametroContinuoCreateManyParametroInput | PruebaParametroContinuoCreateManyParametroInput[]
    skipDuplicates?: boolean
  }

  export type UnidadUpsertWithoutParametrosInput = {
    update: XOR<UnidadUpdateWithoutParametrosInput, UnidadUncheckedUpdateWithoutParametrosInput>
    create: XOR<UnidadCreateWithoutParametrosInput, UnidadUncheckedCreateWithoutParametrosInput>
    where?: UnidadWhereInput
  }

  export type UnidadUpdateToOneWithWhereWithoutParametrosInput = {
    where?: UnidadWhereInput
    data: XOR<UnidadUpdateWithoutParametrosInput, UnidadUncheckedUpdateWithoutParametrosInput>
  }

  export type UnidadUpdateWithoutParametrosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type UnidadUncheckedUpdateWithoutParametrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type PruebaParametroValorUpsertWithWhereUniqueWithoutParametroInput = {
    where: PruebaParametroValorWhereUniqueInput
    update: XOR<PruebaParametroValorUpdateWithoutParametroInput, PruebaParametroValorUncheckedUpdateWithoutParametroInput>
    create: XOR<PruebaParametroValorCreateWithoutParametroInput, PruebaParametroValorUncheckedCreateWithoutParametroInput>
  }

  export type PruebaParametroValorUpdateWithWhereUniqueWithoutParametroInput = {
    where: PruebaParametroValorWhereUniqueInput
    data: XOR<PruebaParametroValorUpdateWithoutParametroInput, PruebaParametroValorUncheckedUpdateWithoutParametroInput>
  }

  export type PruebaParametroValorUpdateManyWithWhereWithoutParametroInput = {
    where: PruebaParametroValorScalarWhereInput
    data: XOR<PruebaParametroValorUpdateManyMutationInput, PruebaParametroValorUncheckedUpdateManyWithoutParametroInput>
  }

  export type PruebaParametroValorScalarWhereInput = {
    AND?: PruebaParametroValorScalarWhereInput | PruebaParametroValorScalarWhereInput[]
    OR?: PruebaParametroValorScalarWhereInput[]
    NOT?: PruebaParametroValorScalarWhereInput | PruebaParametroValorScalarWhereInput[]
    puntoId?: IntFilter<"PruebaParametroValor"> | number
    parametroId?: IntFilter<"PruebaParametroValor"> | number
    numeroProtocolo?: IntFilter<"PruebaParametroValor"> | number
    valorEntero?: IntNullableFilter<"PruebaParametroValor"> | number | null
    valorDecimal?: FloatNullableFilter<"PruebaParametroValor"> | number | null
    valorTexto?: StringNullableFilter<"PruebaParametroValor"> | string | null
    valorFecha?: DateTimeNullableFilter<"PruebaParametroValor"> | Date | string | null
    valorBool?: BoolNullableFilter<"PruebaParametroValor"> | boolean | null
  }

  export type PruebaParametroContinuoUpsertWithWhereUniqueWithoutParametroInput = {
    where: PruebaParametroContinuoWhereUniqueInput
    update: XOR<PruebaParametroContinuoUpdateWithoutParametroInput, PruebaParametroContinuoUncheckedUpdateWithoutParametroInput>
    create: XOR<PruebaParametroContinuoCreateWithoutParametroInput, PruebaParametroContinuoUncheckedCreateWithoutParametroInput>
  }

  export type PruebaParametroContinuoUpdateWithWhereUniqueWithoutParametroInput = {
    where: PruebaParametroContinuoWhereUniqueInput
    data: XOR<PruebaParametroContinuoUpdateWithoutParametroInput, PruebaParametroContinuoUncheckedUpdateWithoutParametroInput>
  }

  export type PruebaParametroContinuoUpdateManyWithWhereWithoutParametroInput = {
    where: PruebaParametroContinuoScalarWhereInput
    data: XOR<PruebaParametroContinuoUpdateManyMutationInput, PruebaParametroContinuoUncheckedUpdateManyWithoutParametroInput>
  }

  export type PruebaParametroContinuoScalarWhereInput = {
    AND?: PruebaParametroContinuoScalarWhereInput | PruebaParametroContinuoScalarWhereInput[]
    OR?: PruebaParametroContinuoScalarWhereInput[]
    NOT?: PruebaParametroContinuoScalarWhereInput | PruebaParametroContinuoScalarWhereInput[]
    fechaHora?: DateTimeFilter<"PruebaParametroContinuo"> | Date | string
    parametroId?: IntFilter<"PruebaParametroContinuo"> | number
    numeroProtocolo?: IntFilter<"PruebaParametroContinuo"> | number
    valorEntero?: IntNullableFilter<"PruebaParametroContinuo"> | number | null
    valorDecimal?: FloatNullableFilter<"PruebaParametroContinuo"> | number | null
    valorTexto?: StringNullableFilter<"PruebaParametroContinuo"> | string | null
    valorFecha?: DateTimeNullableFilter<"PruebaParametroContinuo"> | Date | string | null
    valorBool?: BoolNullableFilter<"PruebaParametroContinuo"> | boolean | null
  }

  export type DetallesCreateWithoutPruebasInput = {
    esBombaVertical?: boolean
    comentario?: string | null
    correccionManometrica?: number | null
    presionAtmosferica?: number | null
    temperaturaAgua?: number | null
    temperaturaAmbiente?: number | null
    temperaturaLadoAcoplamiento?: number | null
    temperaturaLadoBomba?: number | null
    tiempoFuncionamientoBomba?: number | null
  }

  export type DetallesUncheckedCreateWithoutPruebasInput = {
    id?: number
    esBombaVertical?: boolean
    comentario?: string | null
    correccionManometrica?: number | null
    presionAtmosferica?: number | null
    temperaturaAgua?: number | null
    temperaturaAmbiente?: number | null
    temperaturaLadoAcoplamiento?: number | null
    temperaturaLadoBomba?: number | null
    tiempoFuncionamientoBomba?: number | null
  }

  export type DetallesCreateOrConnectWithoutPruebasInput = {
    where: DetallesWhereUniqueInput
    create: XOR<DetallesCreateWithoutPruebasInput, DetallesUncheckedCreateWithoutPruebasInput>
  }

  export type MotorCreateWithoutPruebasInput = {
    marca?: string | null
    tipo?: string | null
    potencia?: number | null
    velocidad?: number | null
    intensidad?: number | null
    rendimiento25?: number | null
    rendimiento50?: number | null
    rendimiento75?: number | null
    rendimiento100?: number | null
    rendimiento125?: number | null
    estado?: boolean
  }

  export type MotorUncheckedCreateWithoutPruebasInput = {
    id?: number
    marca?: string | null
    tipo?: string | null
    potencia?: number | null
    velocidad?: number | null
    intensidad?: number | null
    rendimiento25?: number | null
    rendimiento50?: number | null
    rendimiento75?: number | null
    rendimiento100?: number | null
    rendimiento125?: number | null
    estado?: boolean
  }

  export type MotorCreateOrConnectWithoutPruebasInput = {
    where: MotorWhereUniqueInput
    create: XOR<MotorCreateWithoutPruebasInput, MotorUncheckedCreateWithoutPruebasInput>
  }

  export type BombaCreateWithoutPruebasInput = {
    item?: string | null
    tipoBomba?: string | null
    numeroSerie?: string | null
    diametroAspiracion?: number | null
    diametroImpulsion?: number | null
    diametroRodete?: string | null
    tipoCierre?: string | null
  }

  export type BombaUncheckedCreateWithoutPruebasInput = {
    id?: number
    item?: string | null
    tipoBomba?: string | null
    numeroSerie?: string | null
    diametroAspiracion?: number | null
    diametroImpulsion?: number | null
    diametroRodete?: string | null
    tipoCierre?: string | null
  }

  export type BombaCreateOrConnectWithoutPruebasInput = {
    where: BombaWhereUniqueInput
    create: XOR<BombaCreateWithoutPruebasInput, BombaUncheckedCreateWithoutPruebasInput>
  }

  export type ClienteCreateWithoutPruebasInput = {
    nombre: string
    direccion?: string | null
    contacto?: string | null
    telefono?: string | null
    email?: string | null
    estado?: boolean
    fechaCreacion?: Date | string
  }

  export type ClienteUncheckedCreateWithoutPruebasInput = {
    id?: number
    nombre: string
    direccion?: string | null
    contacto?: string | null
    telefono?: string | null
    email?: string | null
    estado?: boolean
    fechaCreacion?: Date | string
  }

  export type ClienteCreateOrConnectWithoutPruebasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPruebasInput, ClienteUncheckedCreateWithoutPruebasInput>
  }

  export type BancoCreateWithoutPruebasInput = {
    nombre: string
    estado?: boolean
  }

  export type BancoUncheckedCreateWithoutPruebasInput = {
    id?: number
    nombre: string
    estado?: boolean
  }

  export type BancoCreateOrConnectWithoutPruebasInput = {
    where: BancoWhereUniqueInput
    create: XOR<BancoCreateWithoutPruebasInput, BancoUncheckedCreateWithoutPruebasInput>
  }

  export type PruebaParametroValorCreateWithoutPruebaInput = {
    puntoId: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
    parametro: ParametroCreateNestedOneWithoutValoresInput
  }

  export type PruebaParametroValorUncheckedCreateWithoutPruebaInput = {
    puntoId: number
    parametroId: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroValorCreateOrConnectWithoutPruebaInput = {
    where: PruebaParametroValorWhereUniqueInput
    create: XOR<PruebaParametroValorCreateWithoutPruebaInput, PruebaParametroValorUncheckedCreateWithoutPruebaInput>
  }

  export type PruebaParametroValorCreateManyPruebaInputEnvelope = {
    data: PruebaParametroValorCreateManyPruebaInput | PruebaParametroValorCreateManyPruebaInput[]
    skipDuplicates?: boolean
  }

  export type PruebaParametroContinuoCreateWithoutPruebaInput = {
    fechaHora: Date | string
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
    parametro: ParametroCreateNestedOneWithoutContinuosInput
  }

  export type PruebaParametroContinuoUncheckedCreateWithoutPruebaInput = {
    fechaHora: Date | string
    parametroId: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroContinuoCreateOrConnectWithoutPruebaInput = {
    where: PruebaParametroContinuoWhereUniqueInput
    create: XOR<PruebaParametroContinuoCreateWithoutPruebaInput, PruebaParametroContinuoUncheckedCreateWithoutPruebaInput>
  }

  export type PruebaParametroContinuoCreateManyPruebaInputEnvelope = {
    data: PruebaParametroContinuoCreateManyPruebaInput | PruebaParametroContinuoCreateManyPruebaInput[]
    skipDuplicates?: boolean
  }

  export type DetallesUpsertWithoutPruebasInput = {
    update: XOR<DetallesUpdateWithoutPruebasInput, DetallesUncheckedUpdateWithoutPruebasInput>
    create: XOR<DetallesCreateWithoutPruebasInput, DetallesUncheckedCreateWithoutPruebasInput>
    where?: DetallesWhereInput
  }

  export type DetallesUpdateToOneWithWhereWithoutPruebasInput = {
    where?: DetallesWhereInput
    data: XOR<DetallesUpdateWithoutPruebasInput, DetallesUncheckedUpdateWithoutPruebasInput>
  }

  export type DetallesUpdateWithoutPruebasInput = {
    esBombaVertical?: BoolFieldUpdateOperationsInput | boolean
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    correccionManometrica?: NullableFloatFieldUpdateOperationsInput | number | null
    presionAtmosferica?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAgua?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAmbiente?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoAcoplamiento?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
    tiempoFuncionamientoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DetallesUncheckedUpdateWithoutPruebasInput = {
    id?: IntFieldUpdateOperationsInput | number
    esBombaVertical?: BoolFieldUpdateOperationsInput | boolean
    comentario?: NullableStringFieldUpdateOperationsInput | string | null
    correccionManometrica?: NullableFloatFieldUpdateOperationsInput | number | null
    presionAtmosferica?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAgua?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaAmbiente?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoAcoplamiento?: NullableFloatFieldUpdateOperationsInput | number | null
    temperaturaLadoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
    tiempoFuncionamientoBomba?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type MotorUpsertWithoutPruebasInput = {
    update: XOR<MotorUpdateWithoutPruebasInput, MotorUncheckedUpdateWithoutPruebasInput>
    create: XOR<MotorCreateWithoutPruebasInput, MotorUncheckedCreateWithoutPruebasInput>
    where?: MotorWhereInput
  }

  export type MotorUpdateToOneWithWhereWithoutPruebasInput = {
    where?: MotorWhereInput
    data: XOR<MotorUpdateWithoutPruebasInput, MotorUncheckedUpdateWithoutPruebasInput>
  }

  export type MotorUpdateWithoutPruebasInput = {
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    intensidad?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento25?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento50?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento75?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento100?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento125?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MotorUncheckedUpdateWithoutPruebasInput = {
    id?: IntFieldUpdateOperationsInput | number
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    tipo?: NullableStringFieldUpdateOperationsInput | string | null
    potencia?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    intensidad?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento25?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento50?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento75?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento100?: NullableFloatFieldUpdateOperationsInput | number | null
    rendimiento125?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BombaUpsertWithoutPruebasInput = {
    update: XOR<BombaUpdateWithoutPruebasInput, BombaUncheckedUpdateWithoutPruebasInput>
    create: XOR<BombaCreateWithoutPruebasInput, BombaUncheckedCreateWithoutPruebasInput>
    where?: BombaWhereInput
  }

  export type BombaUpdateToOneWithWhereWithoutPruebasInput = {
    where?: BombaWhereInput
    data: XOR<BombaUpdateWithoutPruebasInput, BombaUncheckedUpdateWithoutPruebasInput>
  }

  export type BombaUpdateWithoutPruebasInput = {
    item?: NullableStringFieldUpdateOperationsInput | string | null
    tipoBomba?: NullableStringFieldUpdateOperationsInput | string | null
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    diametroAspiracion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroImpulsion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroRodete?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCierre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BombaUncheckedUpdateWithoutPruebasInput = {
    id?: IntFieldUpdateOperationsInput | number
    item?: NullableStringFieldUpdateOperationsInput | string | null
    tipoBomba?: NullableStringFieldUpdateOperationsInput | string | null
    numeroSerie?: NullableStringFieldUpdateOperationsInput | string | null
    diametroAspiracion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroImpulsion?: NullableFloatFieldUpdateOperationsInput | number | null
    diametroRodete?: NullableStringFieldUpdateOperationsInput | string | null
    tipoCierre?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClienteUpsertWithoutPruebasInput = {
    update: XOR<ClienteUpdateWithoutPruebasInput, ClienteUncheckedUpdateWithoutPruebasInput>
    create: XOR<ClienteCreateWithoutPruebasInput, ClienteUncheckedCreateWithoutPruebasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPruebasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPruebasInput, ClienteUncheckedUpdateWithoutPruebasInput>
  }

  export type ClienteUpdateWithoutPruebasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClienteUncheckedUpdateWithoutPruebasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    contacto?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    fechaCreacion?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BancoUpsertWithoutPruebasInput = {
    update: XOR<BancoUpdateWithoutPruebasInput, BancoUncheckedUpdateWithoutPruebasInput>
    create: XOR<BancoCreateWithoutPruebasInput, BancoUncheckedCreateWithoutPruebasInput>
    where?: BancoWhereInput
  }

  export type BancoUpdateToOneWithWhereWithoutPruebasInput = {
    where?: BancoWhereInput
    data: XOR<BancoUpdateWithoutPruebasInput, BancoUncheckedUpdateWithoutPruebasInput>
  }

  export type BancoUpdateWithoutPruebasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BancoUncheckedUpdateWithoutPruebasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PruebaParametroValorUpsertWithWhereUniqueWithoutPruebaInput = {
    where: PruebaParametroValorWhereUniqueInput
    update: XOR<PruebaParametroValorUpdateWithoutPruebaInput, PruebaParametroValorUncheckedUpdateWithoutPruebaInput>
    create: XOR<PruebaParametroValorCreateWithoutPruebaInput, PruebaParametroValorUncheckedCreateWithoutPruebaInput>
  }

  export type PruebaParametroValorUpdateWithWhereUniqueWithoutPruebaInput = {
    where: PruebaParametroValorWhereUniqueInput
    data: XOR<PruebaParametroValorUpdateWithoutPruebaInput, PruebaParametroValorUncheckedUpdateWithoutPruebaInput>
  }

  export type PruebaParametroValorUpdateManyWithWhereWithoutPruebaInput = {
    where: PruebaParametroValorScalarWhereInput
    data: XOR<PruebaParametroValorUpdateManyMutationInput, PruebaParametroValorUncheckedUpdateManyWithoutPruebaInput>
  }

  export type PruebaParametroContinuoUpsertWithWhereUniqueWithoutPruebaInput = {
    where: PruebaParametroContinuoWhereUniqueInput
    update: XOR<PruebaParametroContinuoUpdateWithoutPruebaInput, PruebaParametroContinuoUncheckedUpdateWithoutPruebaInput>
    create: XOR<PruebaParametroContinuoCreateWithoutPruebaInput, PruebaParametroContinuoUncheckedCreateWithoutPruebaInput>
  }

  export type PruebaParametroContinuoUpdateWithWhereUniqueWithoutPruebaInput = {
    where: PruebaParametroContinuoWhereUniqueInput
    data: XOR<PruebaParametroContinuoUpdateWithoutPruebaInput, PruebaParametroContinuoUncheckedUpdateWithoutPruebaInput>
  }

  export type PruebaParametroContinuoUpdateManyWithWhereWithoutPruebaInput = {
    where: PruebaParametroContinuoScalarWhereInput
    data: XOR<PruebaParametroContinuoUpdateManyMutationInput, PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaInput>
  }

  export type ParametroCreateWithoutValoresInput = {
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
    unidad: UnidadCreateNestedOneWithoutParametrosInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutParametroInput
  }

  export type ParametroUncheckedCreateWithoutValoresInput = {
    id?: number
    unidadId: number
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutParametroInput
  }

  export type ParametroCreateOrConnectWithoutValoresInput = {
    where: ParametroWhereUniqueInput
    create: XOR<ParametroCreateWithoutValoresInput, ParametroUncheckedCreateWithoutValoresInput>
  }

  export type PruebaCreateWithoutValoresInput = {
    fecha?: Date | string
    detalles: DetallesCreateNestedOneWithoutPruebasInput
    motor: MotorCreateNestedOneWithoutPruebasInput
    bomba: BombaCreateNestedOneWithoutPruebasInput
    cliente: ClienteCreateNestedOneWithoutPruebasInput
    banco: BancoCreateNestedOneWithoutPruebasInput
    continuos?: PruebaParametroContinuoCreateNestedManyWithoutPruebaInput
  }

  export type PruebaUncheckedCreateWithoutValoresInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
    continuos?: PruebaParametroContinuoUncheckedCreateNestedManyWithoutPruebaInput
  }

  export type PruebaCreateOrConnectWithoutValoresInput = {
    where: PruebaWhereUniqueInput
    create: XOR<PruebaCreateWithoutValoresInput, PruebaUncheckedCreateWithoutValoresInput>
  }

  export type ParametroUpsertWithoutValoresInput = {
    update: XOR<ParametroUpdateWithoutValoresInput, ParametroUncheckedUpdateWithoutValoresInput>
    create: XOR<ParametroCreateWithoutValoresInput, ParametroUncheckedCreateWithoutValoresInput>
    where?: ParametroWhereInput
  }

  export type ParametroUpdateToOneWithWhereWithoutValoresInput = {
    where?: ParametroWhereInput
    data: XOR<ParametroUpdateWithoutValoresInput, ParametroUncheckedUpdateWithoutValoresInput>
  }

  export type ParametroUpdateWithoutValoresInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    unidad?: UnidadUpdateOneRequiredWithoutParametrosNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutParametroNestedInput
  }

  export type ParametroUncheckedUpdateWithoutValoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutParametroNestedInput
  }

  export type PruebaUpsertWithoutValoresInput = {
    update: XOR<PruebaUpdateWithoutValoresInput, PruebaUncheckedUpdateWithoutValoresInput>
    create: XOR<PruebaCreateWithoutValoresInput, PruebaUncheckedCreateWithoutValoresInput>
    where?: PruebaWhereInput
  }

  export type PruebaUpdateToOneWithWhereWithoutValoresInput = {
    where?: PruebaWhereInput
    data: XOR<PruebaUpdateWithoutValoresInput, PruebaUncheckedUpdateWithoutValoresInput>
  }

  export type PruebaUpdateWithoutValoresInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetallesUpdateOneRequiredWithoutPruebasNestedInput
    motor?: MotorUpdateOneRequiredWithoutPruebasNestedInput
    bomba?: BombaUpdateOneRequiredWithoutPruebasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPruebasNestedInput
    banco?: BancoUpdateOneRequiredWithoutPruebasNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateWithoutValoresInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaNestedInput
  }

  export type ParametroCreateWithoutContinuosInput = {
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
    unidad: UnidadCreateNestedOneWithoutParametrosInput
    valores?: PruebaParametroValorCreateNestedManyWithoutParametroInput
  }

  export type ParametroUncheckedCreateWithoutContinuosInput = {
    id?: number
    unidadId: number
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutParametroInput
  }

  export type ParametroCreateOrConnectWithoutContinuosInput = {
    where: ParametroWhereUniqueInput
    create: XOR<ParametroCreateWithoutContinuosInput, ParametroUncheckedCreateWithoutContinuosInput>
  }

  export type PruebaCreateWithoutContinuosInput = {
    fecha?: Date | string
    detalles: DetallesCreateNestedOneWithoutPruebasInput
    motor: MotorCreateNestedOneWithoutPruebasInput
    bomba: BombaCreateNestedOneWithoutPruebasInput
    cliente: ClienteCreateNestedOneWithoutPruebasInput
    banco: BancoCreateNestedOneWithoutPruebasInput
    valores?: PruebaParametroValorCreateNestedManyWithoutPruebaInput
  }

  export type PruebaUncheckedCreateWithoutContinuosInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
    valores?: PruebaParametroValorUncheckedCreateNestedManyWithoutPruebaInput
  }

  export type PruebaCreateOrConnectWithoutContinuosInput = {
    where: PruebaWhereUniqueInput
    create: XOR<PruebaCreateWithoutContinuosInput, PruebaUncheckedCreateWithoutContinuosInput>
  }

  export type ParametroUpsertWithoutContinuosInput = {
    update: XOR<ParametroUpdateWithoutContinuosInput, ParametroUncheckedUpdateWithoutContinuosInput>
    create: XOR<ParametroCreateWithoutContinuosInput, ParametroUncheckedCreateWithoutContinuosInput>
    where?: ParametroWhereInput
  }

  export type ParametroUpdateToOneWithWhereWithoutContinuosInput = {
    where?: ParametroWhereInput
    data: XOR<ParametroUpdateWithoutContinuosInput, ParametroUncheckedUpdateWithoutContinuosInput>
  }

  export type ParametroUpdateWithoutContinuosInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    unidad?: UnidadUpdateOneRequiredWithoutParametrosNestedInput
    valores?: PruebaParametroValorUpdateManyWithoutParametroNestedInput
  }

  export type ParametroUncheckedUpdateWithoutContinuosInput = {
    id?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutParametroNestedInput
  }

  export type PruebaUpsertWithoutContinuosInput = {
    update: XOR<PruebaUpdateWithoutContinuosInput, PruebaUncheckedUpdateWithoutContinuosInput>
    create: XOR<PruebaCreateWithoutContinuosInput, PruebaUncheckedCreateWithoutContinuosInput>
    where?: PruebaWhereInput
  }

  export type PruebaUpdateToOneWithWhereWithoutContinuosInput = {
    where?: PruebaWhereInput
    data: XOR<PruebaUpdateWithoutContinuosInput, PruebaUncheckedUpdateWithoutContinuosInput>
  }

  export type PruebaUpdateWithoutContinuosInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetallesUpdateOneRequiredWithoutPruebasNestedInput
    motor?: MotorUpdateOneRequiredWithoutPruebasNestedInput
    bomba?: BombaUpdateOneRequiredWithoutPruebasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPruebasNestedInput
    banco?: BancoUpdateOneRequiredWithoutPruebasNestedInput
    valores?: PruebaParametroValorUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateWithoutContinuosInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutPruebaNestedInput
  }

  export type ParametroCreateManyUnidadInput = {
    id?: number
    nombre?: string | null
    tipoDato?: string | null
    obligatorio?: boolean
    activo?: boolean
  }

  export type ParametroUpdateWithoutUnidadInput = {
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    valores?: PruebaParametroValorUpdateManyWithoutParametroNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutParametroNestedInput
  }

  export type ParametroUncheckedUpdateWithoutUnidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutParametroNestedInput
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutParametroNestedInput
  }

  export type ParametroUncheckedUpdateManyWithoutUnidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    tipoDato?: NullableStringFieldUpdateOperationsInput | string | null
    obligatorio?: BoolFieldUpdateOperationsInput | boolean
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PruebaCreateManyMotorInput = {
    numeroProtocolo?: number
    detallesId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
  }

  export type PruebaUpdateWithoutMotorInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetallesUpdateOneRequiredWithoutPruebasNestedInput
    bomba?: BombaUpdateOneRequiredWithoutPruebasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPruebasNestedInput
    banco?: BancoUpdateOneRequiredWithoutPruebasNestedInput
    valores?: PruebaParametroValorUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateWithoutMotorInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateManyWithoutMotorInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PruebaCreateManyDetallesInput = {
    numeroProtocolo?: number
    motorId: number
    bombaId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
  }

  export type PruebaUpdateWithoutDetallesInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    motor?: MotorUpdateOneRequiredWithoutPruebasNestedInput
    bomba?: BombaUpdateOneRequiredWithoutPruebasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPruebasNestedInput
    banco?: BancoUpdateOneRequiredWithoutPruebasNestedInput
    valores?: PruebaParametroValorUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateWithoutDetallesInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateManyWithoutDetallesInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PruebaCreateManyBancoInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    bombaId: number
    clienteId: number
    fecha?: Date | string
  }

  export type PruebaUpdateWithoutBancoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetallesUpdateOneRequiredWithoutPruebasNestedInput
    motor?: MotorUpdateOneRequiredWithoutPruebasNestedInput
    bomba?: BombaUpdateOneRequiredWithoutPruebasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPruebasNestedInput
    valores?: PruebaParametroValorUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateWithoutBancoInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateManyWithoutBancoInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PruebaCreateManyBombaInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    clienteId: number
    bancoId: number
    fecha?: Date | string
  }

  export type PruebaUpdateWithoutBombaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetallesUpdateOneRequiredWithoutPruebasNestedInput
    motor?: MotorUpdateOneRequiredWithoutPruebasNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPruebasNestedInput
    banco?: BancoUpdateOneRequiredWithoutPruebasNestedInput
    valores?: PruebaParametroValorUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateWithoutBombaInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateManyWithoutBombaInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PruebaCreateManyClienteInput = {
    numeroProtocolo?: number
    detallesId: number
    motorId: number
    bombaId: number
    bancoId: number
    fecha?: Date | string
  }

  export type PruebaUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    detalles?: DetallesUpdateOneRequiredWithoutPruebasNestedInput
    motor?: MotorUpdateOneRequiredWithoutPruebasNestedInput
    bomba?: BombaUpdateOneRequiredWithoutPruebasNestedInput
    banco?: BancoUpdateOneRequiredWithoutPruebasNestedInput
    valores?: PruebaParametroValorUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateWithoutClienteInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    valores?: PruebaParametroValorUncheckedUpdateManyWithoutPruebaNestedInput
    continuos?: PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaNestedInput
  }

  export type PruebaUncheckedUpdateManyWithoutClienteInput = {
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    detallesId?: IntFieldUpdateOperationsInput | number
    motorId?: IntFieldUpdateOperationsInput | number
    bombaId?: IntFieldUpdateOperationsInput | number
    bancoId?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PruebaParametroValorCreateManyParametroInput = {
    puntoId: number
    numeroProtocolo: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroContinuoCreateManyParametroInput = {
    fechaHora: Date | string
    numeroProtocolo: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroValorUpdateWithoutParametroInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prueba?: PruebaUpdateOneRequiredWithoutValoresNestedInput
  }

  export type PruebaParametroValorUncheckedUpdateWithoutParametroInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroValorUncheckedUpdateManyWithoutParametroInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroContinuoUpdateWithoutParametroInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
    prueba?: PruebaUpdateOneRequiredWithoutContinuosNestedInput
  }

  export type PruebaParametroContinuoUncheckedUpdateWithoutParametroInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroContinuoUncheckedUpdateManyWithoutParametroInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroProtocolo?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroValorCreateManyPruebaInput = {
    puntoId: number
    parametroId: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroContinuoCreateManyPruebaInput = {
    fechaHora: Date | string
    parametroId: number
    valorEntero?: number | null
    valorDecimal?: number | null
    valorTexto?: string | null
    valorFecha?: Date | string | null
    valorBool?: boolean | null
  }

  export type PruebaParametroValorUpdateWithoutPruebaInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parametro?: ParametroUpdateOneRequiredWithoutValoresNestedInput
  }

  export type PruebaParametroValorUncheckedUpdateWithoutPruebaInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    parametroId?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroValorUncheckedUpdateManyWithoutPruebaInput = {
    puntoId?: IntFieldUpdateOperationsInput | number
    parametroId?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroContinuoUpdateWithoutPruebaInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
    parametro?: ParametroUpdateOneRequiredWithoutContinuosNestedInput
  }

  export type PruebaParametroContinuoUncheckedUpdateWithoutPruebaInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    parametroId?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PruebaParametroContinuoUncheckedUpdateManyWithoutPruebaInput = {
    fechaHora?: DateTimeFieldUpdateOperationsInput | Date | string
    parametroId?: IntFieldUpdateOperationsInput | number
    valorEntero?: NullableIntFieldUpdateOperationsInput | number | null
    valorDecimal?: NullableFloatFieldUpdateOperationsInput | number | null
    valorTexto?: NullableStringFieldUpdateOperationsInput | string | null
    valorFecha?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    valorBool?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}