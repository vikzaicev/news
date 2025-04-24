import { Skeleton } from "../../components/Skeleton/Skeleton"

export function withSkeleton(Component, type, count) {
    return function WithSkeleton(props) {
        const { isloading, ...restProps } = props
        if (isloading) {
            return <Skeleton type={type} count={count} />
        }
        return <Component {...restProps} />
    }
}